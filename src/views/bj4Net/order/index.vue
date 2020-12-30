<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <el-form-item label="订单编号" prop="orderNo">
        <el-input
          v-model="queryParams.orderNo"
          placeholder="请输入订单编号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="购买者id" prop="buyUserId">
        <el-input
          v-model="queryParams.buyUserId"
          placeholder="请输入购买者id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="购买书籍的用户名字" prop="buyUserName">
        <el-input
          v-model="queryParams.buyUserName"
          placeholder="请输入购买书籍的用户名字"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="下单的购物车集合ids" prop="shoppingCartIds">
        <el-input
          v-model="queryParams.shoppingCartIds"
          placeholder="请输入下单的购物车集合ids"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="单指书籍的总费用" prop="bookTotalCost">
        <el-input
          v-model="queryParams.bookTotalCost"
          placeholder="请输入单指书籍的总费用"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="海运的总费用" prop="oceanTotalCost">
        <el-input
          v-model="queryParams.oceanTotalCost"
          placeholder="请输入海运的总费用"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="小费-辛苦费" prop="tips">
        <el-input
          v-model="queryParams.tips"
          placeholder="请输入小费-辛苦费"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="打赏" prop="reward">
        <el-input
          v-model="queryParams.reward"
          placeholder="请输入打赏"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="其他费用" prop="otherCost">
        <el-input
          v-model="queryParams.otherCost"
          placeholder="请输入其他费用"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="总费用-其他货币，台币" prop="otherCurrencyTotalCost">
        <el-input
          v-model="queryParams.otherCurrencyTotalCost"
          placeholder="请输入总费用-其他货币，台币"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="总费用-人民币" prop="rmbTotalCost">
        <el-input
          v-model="queryParams.rmbTotalCost"
          placeholder="请输入总费用-人民币"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="未支付的费用，即拖欠费用" prop="unpaid">
        <el-input
          v-model="queryParams.unpaid"
          placeholder="请输入未支付的费用，即拖欠费用"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="已经支付费用" prop="paid">
        <el-input
          v-model="queryParams.paid"
          placeholder="请输入已经支付费用"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否进行了支付,0未支付，1支付，2拖欠" prop="isPay">
        <el-input
          v-model="queryParams.isPay"
          placeholder="请输入是否进行了支付,0未支付，1支付，2拖欠"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否进行了支付,0未支付，1支付，2拖欠" prop="remarks">
        <el-input
          v-model="queryParams.remarks"
          placeholder="请输入是否进行了支付,0未支付，1支付，2拖欠"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="创建时间" prop="createTime">
        <el-date-picker clearable size="small" style="width: 200px"
          v-model="queryParams.createTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择创建时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="修改时间" prop="updateTime">
        <el-date-picker clearable size="small" style="width: 200px"
          v-model="queryParams.updateTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择修改时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="创建者" prop="createUse">
        <el-input
          v-model="queryParams.createUse"
          placeholder="请输入创建者"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="修改者" prop="updateUse">
        <el-input
          v-model="queryParams.updateUse"
          placeholder="请输入修改者"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['bj4Net:order:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['bj4Net:order:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['bj4Net:order:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['bj4Net:order:export']"
        >导出</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="orderList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="修改者" align="center" prop="id" />
      <el-table-column label="订单编号" align="center" prop="orderNo" />
      <el-table-column label="购买者id" align="center" prop="buyUserId" />
      <el-table-column label="购买书籍的用户名字" align="center" prop="buyUserName" />
      <el-table-column label="下单的购物车集合ids" align="center" prop="shoppingCartIds" />
      <el-table-column label="单指书籍的总费用" align="center" prop="bookTotalCost" />
      <el-table-column label="海运的总费用" align="center" prop="oceanTotalCost" />
      <el-table-column label="小费-辛苦费" align="center" prop="tips" />
      <el-table-column label="打赏" align="center" prop="reward" />
      <el-table-column label="其他费用" align="center" prop="otherCost" />
      <el-table-column label="总费用-其他货币，台币" align="center" prop="otherCurrencyTotalCost" />
      <el-table-column label="总费用-人民币" align="center" prop="rmbTotalCost" />
      <el-table-column label="未支付的费用，即拖欠费用" align="center" prop="unpaid" />
      <el-table-column label="已经支付费用" align="center" prop="paid" />
      <el-table-column label="是否进行了支付,0未支付，1支付，2拖欠" align="center" prop="isPay" />
      <el-table-column label="是否进行了支付,0未支付，1支付，2拖欠" align="center" prop="remarks" />
      <el-table-column label="创建时间" align="center" prop="createTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="修改时间" align="center" prop="updateTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.updateTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建者" align="center" prop="createUse" />
      <el-table-column label="修改者" align="center" prop="updateUse" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['bj4Net:order:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['bj4Net:order:remove']"
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

    <!-- 添加或修改bj4动漫屋-订单信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="订单编号" prop="orderNo">
          <el-input v-model="form.orderNo" placeholder="请输入订单编号" />
        </el-form-item>
        <el-form-item label="购买者id" prop="buyUserId">
          <el-input v-model="form.buyUserId" placeholder="请输入购买者id" />
        </el-form-item>
        <el-form-item label="购买书籍的用户名字" prop="buyUserName">
          <el-input v-model="form.buyUserName" placeholder="请输入购买书籍的用户名字" />
        </el-form-item>
        <el-form-item label="下单的购物车集合ids" prop="shoppingCartIds">
          <el-input v-model="form.shoppingCartIds" placeholder="请输入下单的购物车集合ids" />
        </el-form-item>
        <el-form-item label="单指书籍的总费用" prop="bookTotalCost">
          <el-input v-model="form.bookTotalCost" placeholder="请输入单指书籍的总费用" />
        </el-form-item>
        <el-form-item label="海运的总费用" prop="oceanTotalCost">
          <el-input v-model="form.oceanTotalCost" placeholder="请输入海运的总费用" />
        </el-form-item>
        <el-form-item label="小费-辛苦费" prop="tips">
          <el-input v-model="form.tips" placeholder="请输入小费-辛苦费" />
        </el-form-item>
        <el-form-item label="打赏" prop="reward">
          <el-input v-model="form.reward" placeholder="请输入打赏" />
        </el-form-item>
        <el-form-item label="其他费用" prop="otherCost">
          <el-input v-model="form.otherCost" placeholder="请输入其他费用" />
        </el-form-item>
        <el-form-item label="总费用-其他货币，台币" prop="otherCurrencyTotalCost">
          <el-input v-model="form.otherCurrencyTotalCost" placeholder="请输入总费用-其他货币，台币" />
        </el-form-item>
        <el-form-item label="总费用-人民币" prop="rmbTotalCost">
          <el-input v-model="form.rmbTotalCost" placeholder="请输入总费用-人民币" />
        </el-form-item>
        <el-form-item label="未支付的费用，即拖欠费用" prop="unpaid">
          <el-input v-model="form.unpaid" placeholder="请输入未支付的费用，即拖欠费用" />
        </el-form-item>
        <el-form-item label="已经支付费用" prop="paid">
          <el-input v-model="form.paid" placeholder="请输入已经支付费用" />
        </el-form-item>
        <el-form-item label="是否进行了支付,0未支付，1支付，2拖欠" prop="isPay">
          <el-input v-model="form.isPay" placeholder="请输入是否进行了支付,0未支付，1支付，2拖欠" />
        </el-form-item>
        <el-form-item label="是否进行了支付,0未支付，1支付，2拖欠" prop="remarks">
          <el-input v-model="form.remarks" placeholder="请输入是否进行了支付,0未支付，1支付，2拖欠" />
        </el-form-item>
        <el-form-item label="创建者" prop="createUse">
          <el-input v-model="form.createUse" placeholder="请输入创建者" />
        </el-form-item>
        <el-form-item label="修改者" prop="updateUse">
          <el-input v-model="form.updateUse" placeholder="请输入修改者" />
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
import { listOrder, getOrder, delOrder, addOrder, updateOrder, exportOrder } from "@/api/bj4Net/order";

export default {
  name: "Order",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 总条数
      total: 0,
      // bj4动漫屋-订单信息表格数据
      orderList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        orderNo: undefined,
        buyUserId: undefined,
        buyUserName: undefined,
        shoppingCartIds: undefined,
        bookTotalCost: undefined,
        oceanTotalCost: undefined,
        tips: undefined,
        reward: undefined,
        otherCost: undefined,
        otherCurrencyTotalCost: undefined,
        rmbTotalCost: undefined,
        unpaid: undefined,
        paid: undefined,
        isPay: undefined,
        remarks: undefined,
        createTime: undefined,
        updateTime: undefined,
        createUse: undefined,
        updateUse: undefined
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
    /** 查询bj4动漫屋-订单信息列表 */
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
        id: undefined,
        orderNo: undefined,
        buyUserId: undefined,
        buyUserName: undefined,
        shoppingCartIds: undefined,
        bookTotalCost: undefined,
        oceanTotalCost: undefined,
        tips: undefined,
        reward: undefined,
        otherCost: undefined,
        otherCurrencyTotalCost: undefined,
        rmbTotalCost: undefined,
        unpaid: undefined,
        paid: undefined,
        isPay: undefined,
        remarks: undefined,
        createTime: undefined,
        updateTime: undefined,
        createUse: undefined,
        updateUse: undefined
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
      this.single = selection.length!=1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加bj4动漫屋-订单信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getOrder(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改bj4动漫屋-订单信息";
      });
    },
    /** 提交按钮 */
    submitForm: function() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != undefined) {
            updateOrder(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              } else {
                this.msgError(response.msg);
              }
            });
          } else {
            addOrder(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("新增成功");
                this.open = false;
                this.getList();
              } else {
                this.msgError(response.msg);
              }
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$confirm('是否确认删除bj4动漫屋-订单信息编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delOrder(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function() {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有bj4动漫屋-订单信息数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportOrder(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
    }
  }
};
</script>