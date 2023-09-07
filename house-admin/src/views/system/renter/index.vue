<template>
  <div class="app-container">
    <el-row :gutter="10" class="mb5">
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:renter:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:renter:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:renter:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:renter:export']"
        >导出</el-button>
      </el-col>
      <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px" class="el-form-search">
                        <el-form-item label="租金价格" prop="actualPrice" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.actualPrice"
                                    placeholder="请输入租金价格"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="用户昵称" prop="nick" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.nick"
                                    placeholder="请输入用户昵称"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="真实姓名" prop="realName" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.realName"
                                    placeholder="请输入真实姓名"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="手机号" prop="mobile" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.mobile"
                                    placeholder="请输入手机号"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="身份证号" prop="cardId" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.cardId"
                                    placeholder="请输入身份证号"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="是否实名认证" prop="isReal" class="el-form-search-item">
                            <el-select v-model="queryParams.isReal" placeholder="请选择是否实名认证" clearable size="mini">
                                <el-option
                                        v-for="dict in dict.type.house_auth_status"
                                        :key="dict.value"
                                        :label="dict.label"
                                        :value="dict.value"
                                />
                            </el-select>
                        </el-form-item>
            <el-form-item class="el-form-search-item">
                <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
                <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
            </el-form-item>
        </el-form>
    </el-row>

    <el-table :height="tableHeight" v-loading="loading" :data="renterList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="#" type="index" width="50" align="center">
            <template scope="scope">
          <span>{{
            (queryParams.pageNum - 1) * queryParams.pageSize + scope.$index + 1
          }}</span>
            </template>
        </el-table-column>
      <el-table-column label="id" align="center" prop="id" />
      <el-table-column label="房间编号" align="center" prop="houseId" />
      <el-table-column label="租金价格" align="center" prop="actualPrice" />
      <el-table-column label="注册时间" align="center" prop="createTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column label="用户头像" align="center" prop="avatar" width="100">
        <template slot-scope="scope">
          <image-preview :src="scope.row.avatar" :width="30" :height="30"/>
        </template>
      </el-table-column>
      <el-table-column label="用户昵称" align="center" prop="nick" />
      <el-table-column label="真实姓名" align="center" prop="realName" />
      <el-table-column label="手机号" align="center" prop="mobile" />
      <el-table-column label="身份证号" align="center" prop="cardId" />
      <el-table-column label="正面照片" align="center" prop="cardFront" width="100">
        <template slot-scope="scope">
          <image-preview :src="scope.row.cardFront" :width="30" :height="30"/>
        </template>
      </el-table-column>
      <el-table-column label="反面照片" align="center" prop="cardBack" width="100">
        <template slot-scope="scope">
          <image-preview :src="scope.row.cardBack" :width="30" :height="30"/>
        </template>
      </el-table-column>
      <el-table-column label="是否实名认证" align="center" prop="isReal">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.house_auth_status" :value="scope.row.isReal"/>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:renter:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:renter:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改出租信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="800px" append-to-body :close-on-click-modal="false" v-dialogDrag>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="租金价格" prop="actualPrice">
          <el-input v-model="form.actualPrice" placeholder="请输入租金价格" />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" placeholder="请输入备注" />
        </el-form-item>
        <el-form-item label="用户头像" prop="avatar">
          <el-input v-model="form.avatar" placeholder="请输入用户头像" />
        </el-form-item>
        <el-form-item label="用户昵称" prop="nick">
          <el-input v-model="form.nick" placeholder="请输入用户昵称" />
        </el-form-item>
        <el-form-item label="真实姓名" prop="realName">
          <el-input v-model="form.realName" placeholder="请输入真实姓名" />
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="身份证号" prop="cardId">
          <el-input v-model="form.cardId" placeholder="请输入身份证号" />
        </el-form-item>
        <el-form-item label="正面照片">
          <image-upload v-model="form.cardFront"/>
        </el-form-item>
        <el-form-item label="反面照片">
          <image-upload v-model="form.cardBack"/>
        </el-form-item>
        <el-form-item label="是否实名认证">
          <el-radio-group v-model="form.isReal">
            <el-radio
              v-for="dict in dict.type.house_auth_status"
              :key="dict.value"
:label="parseInt(dict.value)"
            >{{dict.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listRenter, getRenter, delRenter, addRenter, updateRenter } from "@/api/system/renter";

export default {
  name: "Renter",
  dicts: ['house_auth_status'],
  data() {
    return {
      // 表格高度
      tableHeight: document.documentElement.clientHeight - 180,
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 出租信息表格数据
      renterList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 20,
        orderByColumn: "create_time",
        isAsc: "desc",
        houseId: null,
        actualPrice: null,
        nick: null,
        realName: null,
        mobile: null,
        cardId: null,
        isReal: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        houseId: [
          { required: true, message: "房间编号不能为空", trigger: "change" }
        ],
        userId: [
          { required: true, message: "租户编号不能为空", trigger: "blur" }
        ],
        publishId: [
          { required: true, message: "发布编号不能为空", trigger: "blur" }
        ],
        actualPrice: [
          { required: true, message: "租金价格不能为空", trigger: "blur" }
        ],
        state: [
          { required: true, message: "状态不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询出租信息列表 */
    getList() {
      this.loading = true;
      listRenter(this.queryParams).then(response => {
        this.renterList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        houseId: null,
        userId: null,
        publishId: null,
        actualPrice: null,
        state: null,
        createTime: null,
        createBy: null,
        updateTime: null,
        updateBy: null,
        remark: null,
        avatar: null,
        nick: null,
        realName: null,
        mobile: null,
        cardId: null,
        cardFront: null,
        cardBack: null,
        isReal: 0
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加出租信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getRenter(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改出租信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateRenter(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addRenter(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除记录？').then(function() {
        return delRenter(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/renter/export', {
        ...this.queryParams
      }, `renter_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
