<template>
  <div class="app-container">
    <el-row :gutter="10" class="mb5">
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:order:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:order:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:order:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:order:export']"
        >导出</el-button>
      </el-col>
      <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px" class="el-form-search">
                        <el-form-item label="订单编号" prop="orderCode" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.orderCode"
                                    placeholder="请输入订单编号"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="房间编号" prop="houseId" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.houseId"
                                    placeholder="请输入房间编号"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="用户id" prop="renterId" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.renterId"
                                    placeholder="请输入用户id"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="订单价格" prop="price" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.price"
                                    placeholder="请输入订单价格"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="订单状态" prop="status" class="el-form-search-item">
                            <el-select v-model="queryParams.status" placeholder="请选择订单状态" clearable size="mini">
                                <el-option
                                        v-for="dict in dict.type.order_type"
                                        :key="dict.value"
                                        :label="dict.label"
                                        :value="dict.value"
                                />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="支付时间" prop="payTime" class="el-form-search-item">
                            <el-date-picker clearable size="mini"
                                            v-model="queryParams.payTime"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择支付时间">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="取消时间" prop="cancelTime" class="el-form-search-item">
                            <el-date-picker clearable size="mini"
                                            v-model="queryParams.cancelTime"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择取消时间">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="支付类型" prop="payType" class="el-form-search-item">
                            <el-select v-model="queryParams.payType" placeholder="请选择支付类型" clearable size="mini">
                                <el-option
                                        v-for="dict in dict.type.pay_type"
                                        :key="dict.value"
                                        :label="dict.label"
                                        :value="dict.value"
                                />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="付款备注" prop="mark" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.mark"
                                    placeholder="请输入付款备注"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
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

    <el-table :height="tableHeight" v-loading="loading" :data="orderList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="#" type="index" width="50" align="center">
            <template scope="scope">
          <span>{{
            (queryParams.pageNum - 1) * queryParams.pageSize + scope.$index + 1
          }}</span>
            </template>
        </el-table-column>
      <el-table-column label="#" align="center" prop="id" />
      <el-table-column label="订单编号" align="center" prop="orderCode" />
      <el-table-column label="房间编号" align="center" prop="houseId" />
      <el-table-column label="用户id" align="center" prop="renterId" />
      <el-table-column label="订单价格" align="center" prop="price" />
      <el-table-column label="订单状态" align="center" prop="status">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.order_type" :value="scope.row.status"/>
        </template>
      </el-table-column>
      <el-table-column label="支付时间" align="center" prop="payTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.payTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="取消时间" align="center" prop="cancelTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.cancelTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="支付类型" align="center" prop="payType">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.pay_type" :value="scope.row.payType"/>
        </template>
      </el-table-column>
      <el-table-column label="付款备注" align="center" prop="mark" />
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
            v-hasPermi="['system:order:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:order:remove']"
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

    <!-- 添加或修改账单对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="800px" append-to-body :close-on-click-modal="false" v-dialogDrag>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="订单编号" prop="orderCode">
          <el-input v-model="form.orderCode" placeholder="请输入订单编号" />
        </el-form-item>
        <el-form-item label="房间编号" prop="houseId">
          <el-input v-model="form.houseId" placeholder="请输入房间编号" />
        </el-form-item>
        <el-form-item label="用户id" prop="renterId">
          <el-input v-model="form.renterId" placeholder="请输入用户id" />
        </el-form-item>
        <el-form-item label="订单价格" prop="price">
          <el-input v-model="form.price" placeholder="请输入订单价格" />
        </el-form-item>
        <el-form-item label="订单状态">
          <el-radio-group v-model="form.status">
            <el-radio
              v-for="dict in dict.type.order_type"
              :key="dict.value"
:label="dict.value"
            >{{dict.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="支付时间" prop="payTime">
          <el-date-picker clearable size="mini"
            v-model="form.payTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择支付时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="取消时间" prop="cancelTime">
          <el-date-picker clearable size="mini"
            v-model="form.cancelTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择取消时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="支付类型" prop="payType">
          <el-select v-model="form.payType" placeholder="请选择支付类型" style="width: 100%">
            <el-option
              v-for="dict in dict.type.pay_type"
              :key="dict.value"
              :label="dict.label"
:value="dict.value"            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="付款备注" prop="mark">
          <el-input v-model="form.mark" placeholder="请输入付款备注" />
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
import { listOrder, getOrder, delOrder, addOrder, updateOrder } from "@/api/system/order";

export default {
  name: "Order",
  dicts: ['pay_type', 'order_type'],
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
      // 账单表格数据
      orderList: [],
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
        orderCode: null,
        houseId: null,
        renterId: null,
        price: null,
        status: null,
        payTime: null,
        cancelTime: null,
        payType: null,
        mark: null,
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
  },
  methods: {
    /** 查询账单列表 */
    getList() {
      this.loading = true;
      listOrder(this.queryParams).then(response => {
        this.orderList = response.rows;
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
        orderCode: null,
        houseId: null,
        renterId: null,
        price: null,
        status: "0",
        createTime: null,
        payTime: null,
        cancelTime: null,
        payType: null,
        mark: null,
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
      this.title = "添加账单";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getOrder(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改账单";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateOrder(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addOrder(this.form).then(response => {
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
        return delOrder(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/order/export', {
        ...this.queryParams
      }, `order_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
