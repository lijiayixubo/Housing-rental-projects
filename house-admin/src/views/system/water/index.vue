<template>
  <div class="app-container">
    <el-row :gutter="10" class="mb5">
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:water:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:water:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:water:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:water:export']"
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
                        <el-form-item label="本月用量" prop="meterMonth" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.meterMonth"
                                    placeholder="请输入本月用量"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="总用量" prop="meterTotal" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.meterTotal"
                                    placeholder="请输入总用量"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="抄表时间" prop="time" class="el-form-search-item">
                            <el-date-picker clearable size="mini"
                                            v-model="queryParams.time"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择抄表时间">
                            </el-date-picker>
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
                        <el-form-item label="阀门状态" prop="status" class="el-form-search-item">
                            <el-select v-model="queryParams.status" placeholder="请选择阀门状态" clearable size="mini">
                                <el-option
                                        v-for="dict in dict.type.house_fee_status"
                                        :key="dict.value"
                                        :label="dict.label"
                                        :value="dict.value"
                                />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="水表类型" prop="type" class="el-form-search-item">
                            <el-select v-model="queryParams.type" placeholder="请选择水表类型" clearable size="mini">
                                <el-option
                                        v-for="dict in dict.type.water_type"
                                        :key="dict.value"
                                        :label="dict.label"
                                        :value="dict.value"
                                />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="水表编号" prop="meterId" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.meterId"
                                    placeholder="请输入水表编号"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="消费金额" prop="totalMoney" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.totalMoney"
                                    placeholder="请输入消费金额"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="剩余金额" prop="remindMoney" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.remindMoney"
                                    placeholder="请输入剩余金额"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="电池电压" prop="elecV" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.elecV"
                                    placeholder="请输入电池电压"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
                        <el-form-item label="信号强度" prop="online" class="el-form-search-item">
                            <el-input
                                    v-model="queryParams.online"
                                    placeholder="请输入信号强度"
                                    clearable
                                    size="mini"
                                    @keyup.enter.native="handleQuery"
                            />
                        </el-form-item>
            <el-form-item class="el-form-search-item">
                <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
                <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
            </el-form-item>
        </el-form>
    </el-row>

    <el-table :height="tableHeight" v-loading="loading" :data="waterList" @selection-change="handleSelectionChange">
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
      <el-table-column label="本月用量" align="center" prop="meterMonth" />
      <el-table-column label="总用量" align="center" prop="meterTotal" />
      <el-table-column label="抄表时间" align="center" prop="time" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.time, '{y}-{m}-{d}') }}</span>
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
      <el-table-column label="阀门状态" align="center" prop="status">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.house_fee_status" :value="scope.row.status"/>
        </template>
      </el-table-column>
      <el-table-column label="水表类型" align="center" prop="type">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.water_type" :value="scope.row.type"/>
        </template>
      </el-table-column>
      <el-table-column label="水表编号" align="center" prop="meterId" />
      <el-table-column label="消费金额" align="center" prop="totalMoney" />
      <el-table-column label="剩余金额" align="center" prop="remindMoney" />
      <el-table-column label="电池电压" align="center" prop="elecV" />
      <el-table-column label="信号强度" align="center" prop="online" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:water:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:water:remove']"
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

    <!-- 添加或修改水费对话框 -->
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
        <el-form-item label="本月用量" prop="meterMonth">
          <el-input v-model="form.meterMonth" placeholder="请输入本月用量" />
        </el-form-item>
        <el-form-item label="总用量" prop="meterTotal">
          <el-input v-model="form.meterTotal" placeholder="请输入总用量" />
        </el-form-item>
        <el-form-item label="抄表时间" prop="time">
          <el-date-picker clearable size="mini"
            v-model="form.time"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择抄表时间">
          </el-date-picker>
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
        <el-form-item label="阀门状态">
          <el-radio-group v-model="form.status">
            <el-radio
              v-for="dict in dict.type.house_fee_status"
              :key="dict.value"
:label="parseInt(dict.value)"
            >{{dict.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="水表类型" prop="type">
          <el-select v-model="form.type" placeholder="请选择水表类型" style="width: 100%">
            <el-option
              v-for="dict in dict.type.water_type"
              :key="dict.value"
              :label="dict.label"
:value="parseInt(dict.value)"            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="水表编号" prop="meterId">
          <el-input v-model="form.meterId" placeholder="请输入水表编号" />
        </el-form-item>
        <el-form-item label="消费金额" prop="totalMoney">
          <el-input v-model="form.totalMoney" placeholder="请输入消费金额" />
        </el-form-item>
        <el-form-item label="剩余金额" prop="remindMoney">
          <el-input v-model="form.remindMoney" placeholder="请输入剩余金额" />
        </el-form-item>
        <el-form-item label="电池电压" prop="elecV">
          <el-input v-model="form.elecV" placeholder="请输入电池电压" />
        </el-form-item>
        <el-form-item label="信号强度" prop="online">
          <el-input v-model="form.online" placeholder="请输入信号强度" />
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
import { listWater, getWater, delWater, addWater, updateWater } from "@/api/system/water";
import { listHouseRoom } from "@/api/house/houseRoom";
export default {
  name: "Water",
  dicts: ['house_fee_status', 'water_type'],
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
      // 水费表格数据
      waterList: [],
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
        meterMonth: null,
        meterTotal: null,
        time: null,
        modifyTime: null,
        delTime: null,
        status: null,
        type: null,
        meterId: null,
        totalMoney: null,
        remindMoney: null,
        elecV: null,
        online: null
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
    /** 查询水费列表 */
    getList() {
      this.loading = true;
      listWater(this.queryParams).then(response => {
        this.waterList = response.rows;
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
        meterMonth: null,
        meterTotal: null,
        time: null,
        createTime: null,
        modifyTime: null,
        delTime: null,
        status: 0,
        type: null,
        meterId: null,
        totalMoney: null,
        remindMoney: null,
        elecV: null,
        online: null
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
      this.title = "添加水费";
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
      getWater(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改水费";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateWater(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addWater(this.form).then(response => {
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
        return delWater(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/water/export', {
        ...this.queryParams
      }, `water_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
