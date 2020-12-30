<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="100px">
      <el-form-item label="书籍的位置：" prop="classificationLocation">
        <el-input
          v-model="queryParams.classificationLocation"
          placeholder="请输入类型(支持模糊查询)"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="请选择分类：">
        <el-cascader v-model="parentIdList" :options="cascaderClassInfoList" placeholder="请选择分类" clearable size="small" show-all-levels="true" @change="handleChange">
        </el-cascader>
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
          v-hasPermi="['bj4Net:classificationInfo:add']"
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
          v-hasPermi="['bj4Net:classificationInfo:edit']"
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
          v-hasPermi="['bj4Net:classificationInfo:remove']"
        >删除
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['bj4Net:classificationInfo:export']"
        >导出
        </el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="classificationInfoList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"/>
      <el-table-column label="id" align="center" prop="id"/>
      <el-table-column label="当前分类位置" align="center" prop="classificationLocation"/>
      <el-table-column label="父级位置" align="center" prop="parentId"/>
      <el-table-column label="是否显示" align="center" prop="isShow"/>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['bj4Net:classificationInfo:edit']"
          >修改
          </el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['bj4Net:classificationInfo:remove']"
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

    <!-- 添加或修改bj4动漫屋-分类信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="分类位置" prop="classificationLocation">
          <el-input v-model="form.classificationLocation" placeholder="请输入分类位置"/>
        </el-form-item>
        <el-form-item label="父类id">
          <el-select v-model="form.parentId" placeholder="请选择父类id">
            <el-option label="请选择字典生成" value=""/>
          </el-select>
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
  import {
    listClassificationInfo,
    getClassificationInfo,
    delClassificationInfo,
    addClassificationInfo,
    updateClassificationInfo,
    exportClassificationInfo,
    getShowClassificationInfoList
  } from "@/api/bj4Net/classificationInfo";

  export default {
    name: "ClassificationInfo",
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
        // bj4动漫屋-分类信息表格数据
        classificationInfoList: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          classificationLocation: undefined,
          parentId: undefined,
          isShow: undefined,
        },
        parentIdList:[],
        // 表单参数
        form: {},
        // 表单校验
        rules: {},
        // 下拉框的数据
        cascaderClassInfoList: {}
      };
    },
    created() {
      this.getList();
      this.getShowList();
    },
    methods: {

      opropsClassInfo() {

      },

      /** 查询显示的详情信息 */
      getShowList(parentId) {
        getShowClassificationInfoList(parentId).then(response => {
          // this.cascaderClassInfoList = response.data;
          // console.log(this.cascaderClassInfoList)
          this.cascaderClassInfoList = this.convertToTreeData(response.data, 0);
          console.log(this.cascaderClassInfoList)
        });

      },
      handleChange(value) {
        console.log(value);
      },
      //格式化数据
      convertToTreeData(data, pid) {
        const result = [];
        let temp = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].parentId === pid) {
            const obj = {
              value: data[i].id,
              label: data[i].classificationLocation,
              parentId: data[i].parentId,
              // parentMenuId: data[i].parentMenuId
            };
            temp = this.convertToTreeData(data, data[i].id);
            if (temp.length > 0) {
              obj.children = temp;
            }
            result.push(obj);
          }
        }
        return result;
      },
      /** 查询bj4动漫屋-分类信息列表 */
      getList() {
        this.loading = true;
        if(this.parentIdList)
        {
          this.queryParams.parentId = this.parentIdList[this.parentIdList.length-1]
        }
        listClassificationInfo(this.queryParams).then(response => {
          this.classificationInfoList = response.rows;
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
          classificationLocation: undefined,
          parentId: undefined,
          isShow: undefined
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
        this.single = selection.length != 1
        this.multiple = !selection.length
      },
      /** 新增按钮操作 */
      handleAdd() {
        this.reset();
        this.open = true;
        this.title = "添加bj4动漫屋-分类信息";
      },
      /** 修改按钮操作 */
      handleUpdate(row) {
        this.reset();
        const id = row.id || this.ids
        getClassificationInfo(id).then(response => {
          this.form = response.data;
          this.open = true;
          this.title = "修改bj4动漫屋-分类信息";
        });
      },
      /** 提交按钮 */
      submitForm: function () {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if (this.form.id != undefined) {
              updateClassificationInfo(this.form).then(response => {
                if (response.code === 200) {
                  this.msgSuccess("修改成功");
                  this.open = false;
                  this.getList();
                } else {
                  this.msgError(response.msg);
                }
              });
            } else {
              addClassificationInfo(this.form).then(response => {
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
        this.$confirm('是否确认删除bj4动漫屋-分类信息编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          return delClassificationInfo(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function () {
        });
      },
      /** 导出按钮操作 */
      handleExport() {
        const queryParams = this.queryParams;
        this.$confirm('是否确认导出所有bj4动漫屋-分类信息数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          return exportClassificationInfo(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function () {
        });
      }
    }
  };
</script>
