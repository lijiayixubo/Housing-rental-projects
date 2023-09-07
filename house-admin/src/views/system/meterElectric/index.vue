<template>
  <div class="app-container">
    <el-row :gutter="10" class="mb5">
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:meter:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:meter:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:meter:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:meter:export']"
        >导出</el-button>
      </el-col>
      <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px" class="el-form-search">
                        <el-form-item label="房间编号" prop="houseId" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.houseId"
                                    placeholder="请输入房间编号"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="电表编号" prop="meterId" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.meterId"
                                    placeholder="请输入电表编号"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="电表类型" prop="type" class="el-form-search-item">
                            <el-select v-model="queryParams.type" placeholder="请选择电表类型" clearable size="mini">
                                <el-option
                                        v-for="dict in dict.type.electric_type"
                                        :key="dict.value"
                                        :label="dict.label"
                                        :value="dict.value"
                                />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="修改时间" prop="modifyTime" class="el-form-search-item">
                            <el-date-picker clearable size="mini"
                                            v-model="queryParams.modifyTime"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择修改时间">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="删除时间" prop="delTime" class="el-form-search-item">
                            <el-date-picker clearable size="mini"
                                            v-model="queryParams.delTime"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择删除时间">
                            </el-date-picker>
                        </el-form-item>
            <el-form-item class="el-form-search-item">
                <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
                <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
            </el-form-item>
        </el-form>
    </el-row>

    <el-table :height="tableHeight" v-loading="loading" :data="meterList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="#" type="index" width="50" align="center">
            <template scope="scope">
          <span>{{
            (queryParams.pageNum - 1) * queryParams.pageSize + scope.$index + 1
          }}</span>
            </template>
        </el-table-column>
      <el-table-column label="#" align="center" prop="id" />
      <el-table-column label="房间编号" align="center" prop="houseId" />
      <el-table-column label="电表编号" align="center" prop="meterId" />
      <el-table-column label="电表类型" align="center" prop="type">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.electric_type" :value="scope.row.type"/>
        </template>
      </el-table-column>
      <el-table-column label="修改时间" align="center" prop="modifyTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.modifyTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="删除时间" align="center" prop="delTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.delTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:meter:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:meter:remove']"
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

    <!-- 添加或修改电对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="800px" append-to-body :close-on-click-modal="false" v-dialogDrag>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="房间编号">
          <el-autocomplete
            popper-class="my-autocomplete"
            v-model="form.houseId"
            :fetch-suggestions="querySearch"
            placeholder="输入要搜索的房间编号或名称">
            <i
              class="el-icon-search el-input__icon"
              slot="suffix"
              @click="handleSelect">
            </i>
            <template slot-scope="{ item }">
              <div style="display: flex;justify-content: space-between;">
                <span @click="selectHouse(item)" class="name">{{ item.houseCode }}</span>
                <span @click="selectHouse(item)" class="addr">{{ item.id }}</span>
              </div>
            </template>
          </el-autocomplete>
        </el-form-item>
        <el-form-item label="电表编号" prop="meterId">
          <el-input v-model="form.meterId" placeholder="请输入电表编号" />
        </el-form-item>
        <el-form-item label="电表类型" prop="type">
          <el-select v-model="form.type" placeholder="请选择电表类型" style="width: 100%">
            <el-option
              v-for="dict in dict.type.electric_type"
              :key="dict.value"
              :label="dict.label"
:value="parseInt(dict.value)"            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="修改时间" prop="modifyTime">
          <el-date-picker clearable size="mini"
            v-model="form.modifyTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择修改时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="删除时间" prop="delTime">
          <el-date-picker clearable size="mini"
            v-model="form.delTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择删除时间">
          </el-date-picker>
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
import { listMeter, getMeter, delMeter, addMeter, updateMeter } from "@/api/system/meterElectric";
import { listHouseRoom } from "@/api/house/houseRoom";
export default {
  name: "Meter",
  dicts: ['electric_type'],
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
      // 电表格数据
      meterList: [],
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
        meterId: null,
        type: null,
        modifyTime: null,
        delTime: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
    this.getHouseList();
  },
  methods: {
    /** 查询电列表 */
    getList() {
      this.loading = true;
      listMeter(this.queryParams).then(response => {
        this.meterList = response.rows;
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
        meterId: null,
        type: null,
        createTime: null,
        modifyTime: null,
        delTime: null
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
      this.title = "添加电";
    },
    /** 查询房源详情列表 */
    getHouseList() {
      this.loading = true;
      listHouseRoom({
        pageNum: 1,
        pageSize: 1000
      }).then((response) => {
        this.houseList = response.rows.map(room => ({
          label: room.houseCode,
          value: room.id.toString(),
          houseCode: room.houseCode,
          id: room.id
        }));
        this.loading = false;
      });
    },
    querySearch(queryString, cb) {
      var results = queryString ? this.houseList.filter(this.createFilter(queryString)) : this.houseList;
      // 调用 callback 返回建议列表的数据
      cb && cb(results);
    },
    queryHouseSearch(queryString, cb) {
      var results = queryString ? this.houseList.filter(this.createFilter(queryString)) : this.houseList;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return ((restaurant.houseCode && restaurant.houseCode.indexOf(queryString) > -1) || restaurant.id.toString().indexOf(queryString) > -1);
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    selectHouse(item){
      console.log(1111);
			// this.form.houseId = item.id.toString();
      // this.$forceUpdate();
		},
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getMeter(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改电";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateMeter(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addMeter(this.form).then(response => {
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
        return delMeter(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/meter/export', {
        ...this.queryParams
      }, `meter_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
