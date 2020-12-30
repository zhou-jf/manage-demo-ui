<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <el-form-item label="书籍详情no" prop="bookNo">
        <el-input
          v-model="queryParams.bookNo"
          placeholder="请输入书籍详情no"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="书籍id" prop="bookId">
        <el-input
          v-model="queryParams.bookId"
          placeholder="请输入书籍id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="书籍的名字" prop="bookName">
        <el-input
          v-model="queryParams.bookName"
          placeholder="请输入书籍的名字"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="书籍的作者" prop="bookAuthor">
        <el-input
          v-model="queryParams.bookAuthor"
          placeholder="请输入书籍的作者"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="购买用户的id" prop="buyUserId">
        <el-input
          v-model="queryParams.buyUserId"
          placeholder="请输入购买用户的id"
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
      <el-form-item label="其他货币" prop="otherCurrencyDollar">
        <el-input
          v-model="queryParams.otherCurrencyDollar"
          placeholder="请输入其他货币"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="人民币" prop="rmb">
        <el-input
          v-model="queryParams.rmb"
          placeholder="请输入人民币"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="其他货币单位" prop="otherCurrencyUnit">
        <el-input
          v-model="queryParams.otherCurrencyUnit"
          placeholder="请输入其他货币单位"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="海运费用" prop="oceanFreight">
        <el-input
          v-model="queryParams.oceanFreight"
          placeholder="请输入海运费用"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="购买状态，1已经购买，-1缺货，0还未购买" prop="buyState">
        <el-input
          v-model="queryParams.buyState"
          placeholder="请输入购买状态，1已经购买，-1缺货，0还未购买"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="备注" prop="remarks">
        <el-input
          v-model="queryParams.remarks"
          placeholder="请输入备注"
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
          v-hasPermi="['bj4Net:cart:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['bj4Net:cart:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['bj4Net:cart:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['bj4Net:cart:export']"
        >导出</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="cartList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="修改者" align="center" prop="id" />
      <el-table-column label="书籍详情no" align="center" prop="bookNo" />
      <el-table-column label="书籍id" align="center" prop="bookId" />
      <el-table-column label="书籍的名字" align="center" prop="bookName" />
      <el-table-column label="书籍的作者" align="center" prop="bookAuthor" />
      <el-table-column label="购买用户的id" align="center" prop="buyUserId" />
      <el-table-column label="购买书籍的用户名字" align="center" prop="buyUserName" />
      <el-table-column label="其他货币" align="center" prop="otherCurrencyDollar" />
      <el-table-column label="人民币" align="center" prop="rmb" />
      <el-table-column label="其他货币单位" align="center" prop="otherCurrencyUnit" />
      <el-table-column label="海运费用" align="center" prop="oceanFreight" />
      <el-table-column label="购买状态，1已经购买，-1缺货，0还未购买" align="center" prop="buyState" />
      <el-table-column label="备注" align="center" prop="remarks" />
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
            v-hasPermi="['bj4Net:cart:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['bj4Net:cart:remove']"
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

    <!-- 添加或修改bj4动漫屋-购车信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="书籍详情no" prop="bookNo">
          <el-input v-model="form.bookNo" placeholder="请输入书籍详情no" />
        </el-form-item>
        <el-form-item label="书籍id" prop="bookId">
          <el-input v-model="form.bookId" placeholder="请输入书籍id" />
        </el-form-item>
        <el-form-item label="书籍的名字" prop="bookName">
          <el-input v-model="form.bookName" placeholder="请输入书籍的名字" />
        </el-form-item>
        <el-form-item label="书籍的作者" prop="bookAuthor">
          <el-input v-model="form.bookAuthor" placeholder="请输入书籍的作者" />
        </el-form-item>
        <el-form-item label="购买用户的id" prop="buyUserId">
          <el-input v-model="form.buyUserId" placeholder="请输入购买用户的id" />
        </el-form-item>
        <el-form-item label="购买书籍的用户名字" prop="buyUserName">
          <el-input v-model="form.buyUserName" placeholder="请输入购买书籍的用户名字" />
        </el-form-item>
        <el-form-item label="其他货币" prop="otherCurrencyDollar">
          <el-input v-model="form.otherCurrencyDollar" placeholder="请输入其他货币" />
        </el-form-item>
        <el-form-item label="人民币" prop="rmb">
          <el-input v-model="form.rmb" placeholder="请输入人民币" />
        </el-form-item>
        <el-form-item label="其他货币单位" prop="otherCurrencyUnit">
          <el-input v-model="form.otherCurrencyUnit" placeholder="请输入其他货币单位" />
        </el-form-item>
        <el-form-item label="海运费用" prop="oceanFreight">
          <el-input v-model="form.oceanFreight" placeholder="请输入海运费用" />
        </el-form-item>
        <el-form-item label="购买状态，1已经购买，-1缺货，0还未购买" prop="buyState">
          <el-input v-model="form.buyState" placeholder="请输入购买状态，1已经购买，-1缺货，0还未购买" />
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <el-input v-model="form.remarks" placeholder="请输入备注" />
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
import { listCart, getCart, delCart, addCart, updateCart, exportCart } from "@/api/bj4Net/cart";

export default {
  name: "Cart",
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
      // bj4动漫屋-购车信息表格数据
      cartList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        bookNo: undefined,
        bookId: undefined,
        bookName: undefined,
        bookAuthor: undefined,
        buyUserId: undefined,
        buyUserName: undefined,
        otherCurrencyDollar: undefined,
        rmb: undefined,
        otherCurrencyUnit: undefined,
        oceanFreight: undefined,
        buyState: undefined,
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
        bookName: [
          { required: true, message: "书籍的名字不能为空", trigger: "blur" }
        ],
        bookAuthor: [
          { required: true, message: "书籍的作者不能为空", trigger: "blur" }
        ],
        buyUserName: [
          { required: true, message: "购买书籍的用户名字不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询bj4动漫屋-购车信息列表 */
    getList() {
      this.loading = true;
      listCart(this.queryParams).then(response => {
        this.cartList = response.rows;
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
        bookNo: undefined,
        bookId: undefined,
        bookName: undefined,
        bookAuthor: undefined,
        buyUserId: undefined,
        buyUserName: undefined,
        otherCurrencyDollar: undefined,
        rmb: undefined,
        otherCurrencyUnit: undefined,
        oceanFreight: undefined,
        buyState: undefined,
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
      this.title = "添加bj4动漫屋-购车信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getCart(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改bj4动漫屋-购车信息";
      });
    },
    /** 提交按钮 */
    submitForm: function() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != undefined) {
            updateCart(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              } else {
                this.msgError(response.msg);
              }
            });
          } else {
            addCart(this.form).then(response => {
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
      this.$confirm('是否确认删除bj4动漫屋-购车信息编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delCart(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function() {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有bj4动漫屋-购车信息数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportCart(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
    }
  }
};
</script>
