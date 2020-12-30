<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <!--<el-form-item label="md5加密书名" prop="bId">-->
      <!--<el-input-->
      <!--v-model="queryParams.bId"-->
      <!--placeholder="请输入md5加密书名"-->
      <!--clearable-->
      <!--size="small"-->
      <!--@keyup.enter.native="handleQuery"-->
      <!--/>-->
      <!--</el-form-item>-->
      <el-form-item label="书名：" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入书名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="作者：" prop="author">
        <el-input
          v-model="queryParams.author"
          placeholder="请输入作者名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="类型：" prop="classificationLocationId">
        <el-input
          v-model="queryParams.classificationLocationId"
          placeholder="请选择书籍的类型"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <!--<el-form-item label="其他货币" prop="otherCurrencyDollar">-->
      <!--<el-input-->
      <!--v-model="queryParams.otherCurrencyDollar"-->
      <!--placeholder="请输入其他货币"-->
      <!--clearable-->
      <!--size="small"-->
      <!--@keyup.enter.native="handleQuery"-->
      <!--/>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="人民币" prop="rmb">-->
      <!--<el-input-->
      <!--v-model="queryParams.rmb"-->
      <!--placeholder="请输入人民币"-->
      <!--clearable-->
      <!--size="small"-->
      <!--@keyup.enter.native="handleQuery"-->
      <!--/>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="其他货币单位，支持台币，美元。。。" prop="otherCurrencyUnit">-->
      <!--<el-input-->
      <!--v-model="queryParams.otherCurrencyUnit"-->
      <!--placeholder="请输入其他货币单位，支持台币，美元。。。"-->
      <!--clearable-->
      <!--size="small"-->
      <!--@keyup.enter.native="handleQuery"-->
      <!--/>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="封面图片" prop="coverImage">-->
      <!--<el-input-->
      <!--v-model="queryParams.coverImage"-->
      <!--placeholder="请输入封面图片"-->
      <!--clearable-->
      <!--size="small"-->
      <!--@keyup.enter.native="handleQuery"-->
      <!--/>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="物流方式描述" prop="logisticsMode">-->
      <!--<el-input-->
      <!--v-model="queryParams.logisticsMode"-->
      <!--placeholder="请输入物流方式描述"-->
      <!--clearable-->
      <!--size="small"-->
      <!--@keyup.enter.native="handleQuery"-->
      <!--/>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="书籍介绍" prop="introduction">-->
      <!--<el-input-->
      <!--v-model="queryParams.introduction"-->
      <!--placeholder="请输入书籍介绍"-->
      <!--clearable-->
      <!--size="small"-->
      <!--@keyup.enter.native="handleQuery"-->
      <!--/>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="备注" prop="remarks">-->
      <!--<el-input-->
      <!--v-model="queryParams.remarks"-->
      <!--placeholder="请输入备注"-->
      <!--clearable-->
      <!--size="small"-->
      <!--@keyup.enter.native="handleQuery"-->
      <!--/>-->
      <!--</el-form-item>-->
      <el-form-item label="创建时间" prop="createTime">
        <el-date-picker clearable size="small" style="width: 200px"
                        v-model="queryParams.createTime"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择创建时间">
        </el-date-picker>
      </el-form-item>
      <!--<el-form-item label="修改时间" prop="updateTime">-->
      <!--<el-date-picker clearable size="small" style="width: 200px"-->
      <!--v-model="queryParams.updateTime"-->
      <!--type="date"-->
      <!--value-format="yyyy-MM-dd"-->
      <!--placeholder="选择修改时间">-->
      <!--</el-date-picker>-->
      <!--</el-form-item>-->
      <el-form-item label="操作者：" prop="createUse">
        <el-input
          v-model="queryParams.createUse"
          placeholder="请输入操作者的名字"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <!--<el-form-item label="修改者" prop="updateUse">-->
      <!--<el-input-->
      <!--v-model="queryParams.updateUse"-->
      <!--placeholder="请输入修改者"-->
      <!--clearable-->
      <!--size="small"-->
      <!--@keyup.enter.native="handleQuery"-->
      <!--/>-->
      <!--</el-form-item>-->
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
          v-hasPermi="['bj4Net:book:add']"
        >新增
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['bj4Net:book:edit']"
        >修改
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['bj4Net:book:remove']"
        >删除
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['bj4Net:book:export']"
        >导出
        </el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="bookList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"/>
      <el-table-column label="no" align="center" prop="id"/>
      <!--<el-table-column label="md5加密书名" align="center" prop="bId" />-->
      <el-table-column label="书名" align="center" prop="name"/>
      <el-table-column label="作者" align="center" prop="author"/>
      <el-table-column label="分类位置" align="center" prop="classificationLocationId"/>
      <el-table-column label="其他货币" align="center" prop="otherCurrencyDollar"/>
      <el-table-column label="人民币" align="center" prop="rmb"/>
      <!--<el-table-column label="其他货币单位，支持台币，美元。。。" align="center" prop="otherCurrencyUnit" />-->
      <el-table-column label="封面图片" align="center" prop="coverImage"/>
      <el-table-column label="物流说明" align="center" prop="logisticsMode"/>
      <el-table-column label="书籍介绍" align="center" prop="introduction"/>
      <el-table-column label="备注" align="center" prop="remarks"/>
      <!--<el-table-column label="创建时间" align="center" prop="createTime" width="180">-->
      <!--<template slot-scope="scope">-->
      <!--<span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d}') }}</span>-->
      <!--</template>-->
      <!--</el-table-column>-->
      <el-table-column label="最后操作时间" align="center" prop="updateTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.updateTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <!--<el-table-column label="创建者" align="center" prop="createUse" />-->
      <el-table-column label="最后操作者" align="center" prop="updateUse"/>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['bj4Net:book:edit']"
          >修改
          </el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['bj4Net:book:remove']"
          >删除
          </el-button>
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

    <!-- 添加或修改bj4动漫屋-书籍详情信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <!--<el-form-item label="md5加密书名" prop="bId">-->
        <!--<el-input v-model="form.bId" placeholder="请输入md5加密书名" />-->
        <!--</el-form-item>-->
        <el-form-item label="书名：" prop="name">
          <el-input v-model="form.name" placeholder="请输入书名"/>
        </el-form-item>
        <el-form-item label="作者：" prop="author">
          <el-input v-model="form.author" placeholder="请输入作者名字"/>
        </el-form-item>
        <el-form-item label="分类位置：" prop="classificationLocationId">
          <el-input v-model="form.classificationLocationId" placeholder="请输入该书籍目前的分类位置的id"/>
        </el-form-item>
        <el-form-item label="其他货币" prop="otherCurrencyDollar">
          <el-input v-model="form.otherCurrencyDollar" placeholder="请输入其他货币"/>
        </el-form-item>
        <el-form-item label="其他货币单位" prop="otherCurrencyUnit">
          <el-input v-model="form.otherCurrencyUnit" placeholder="请输入其他货币单位，如台币，美元，默认台币"/>
        </el-form-item>
        <el-form-item label="人民币：" prop="rmb">
          <el-input v-model="form.rmb" placeholder="请输入人民币"/>
        </el-form-item>
        <el-form-item label="封面图片：" prop="coverImage">
          <el-input v-model="form.coverImage" placeholder="请输入封面图片，建议直接填写图片链接"/>
        </el-form-item>
        <el-form-item label="物流说明：" prop="logisticsMode">
          <el-input v-model="form.logisticsMode" placeholder="请输入物流方式描述"/>
        </el-form-item>
        <el-form-item label="书籍介绍：" prop="introduction">
          <el-input v-model="form.introduction" placeholder="请输入书籍介绍"/>
        </el-form-item>
        <el-form-item label="备注：" prop="remarks">
          <el-input v-model="form.remarks" placeholder="请输入备注"/>
        </el-form-item>
        <!--<el-form-item label="创建者" prop="createUse">-->
        <!--<el-input v-model="form.createUse" placeholder="请输入创建者" />-->
        <!--</el-form-item>-->
        <!--<el-form-item label="修改者" prop="updateUse">-->
        <!--<el-input v-model="form.updateUse" placeholder="请输入修改者" />-->
        <!--</el-form-item>-->
        <!--<el-form-item label="伪删除，0存在，1删除" prop="delFlag">-->
        <!--<el-input v-model="form.delFlag" placeholder="请输入伪删除，0存在，1删除" />-->
        <!--</el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {listBook, getBook, delBook, addBook, updateBook, exportBook} from "@/api/bj4Net/book";

  export default {
    name: "Book",
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
        // bj4动漫屋-书籍详情信息表格数据
        bookList: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          bId: undefined,
          name: undefined,
          author: undefined,
          classificationLocationId: undefined,
          otherCurrencyDollar: undefined,
          rmb: undefined,
          otherCurrencyUnit: undefined,
          coverImage: undefined,
          logisticsMode: undefined,
          introduction: undefined,
          remarks: undefined,
          createTime: undefined,
          updateTime: undefined,
          createUse: undefined,
          updateUse: undefined,
        },
        // 表单参数
        form: {},
        // 表单校验
        rules: {
          bId: [
            {required: true, message: "md5加密书名不能为空", trigger: "blur"}
          ],
          name: [
            {required: true, message: "书名不能为空", trigger: "blur"}
          ],
          author: [
            {required: true, message: "作者名不能为空", trigger: "blur"}
          ],
          classificationLocationId: [
            {required: true, message: "该书籍目前的分类位置的id不能为空", trigger: "blur"}
          ],
          delFlag: [
            {required: true, message: "伪删除，0存在，1删除不能为空", trigger: "blur"}
          ]
        }
      };
    },
    created() {
      this.getList();
    },
    methods: {
      /** 查询bj4动漫屋-书籍详情信息列表 */
      getList() {
        this.loading = true;
        listBook(this.queryParams).then(response => {
          this.bookList = response.rows;
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
          bId: undefined,
          name: undefined,
          author: undefined,
          classificationLocationId: undefined,
          otherCurrencyDollar: undefined,
          rmb: undefined,
          otherCurrencyUnit: undefined,
          coverImage: undefined,
          logisticsMode: undefined,
          introduction: undefined,
          remarks: undefined,
          createTime: undefined,
          updateTime: undefined,
          createUse: undefined,
          updateUse: undefined,
          delFlag: undefined
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
        this.ids = selection.map(item => item.id);
        this.single = selection.length !== 1;
        this.multiple = !selection.length
      },
      /** 新增按钮操作 */
      handleAdd() {
        this.reset();
        this.open = true;
        this.title = "添加书籍信息";
      },
      /** 修改按钮操作 */
      handleUpdate(row) {
        this.reset();
        const id = row.id || this.ids
        getBook(id).then(response => {
          this.form = response.data;
          this.open = true;
          this.title = "修改书籍信息";
        });
      },
      /** 提交按钮 */
      submitForm: function () {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if (this.form.id !== undefined) {
              updateBook(this.form).then(response => {
                if (response.code === 200) {
                  this.msgSuccess("修改成功");
                  this.open = false;
                  this.getList();
                } else {
                  this.msgError(response.msg);
                }
              });
            } else {
              addBook(this.form).then(response => {
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
        this.$confirm('是否确认删除bj4动漫屋-书籍详情信息编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          return delBook(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function () {
        });
      },
      /** 导出按钮操作 */
      handleExport() {
        const queryParams = this.queryParams;
        this.$confirm('是否确认导出所有bj4动漫屋-书籍详情信息数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          return exportBook(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function () {
        });
      }
    }
  };
</script>
