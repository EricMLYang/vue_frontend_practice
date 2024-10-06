<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">產品分類管理</h1>
    <div class="flex justify-between mb-4">
      <div class="flex space-x-2">
        <select v-model="selectedCategory" class="border border-gray-300 rounded px-3 py-2">
          <option value="">全部分類</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
        <button @click="queryCategories" class="bg-blue-500 text-white px-4 py-2 rounded">
          查詢
        </button>
      </div>
      <button @click="addCategory" class="bg-green-500 text-white px-4 py-2 rounded">
        新增分類
      </button>
    </div>
    <div class="mb-4">
      <span class="text-gray-600">
        點擊產品分類可進行下一步操作。
      </span>
    </div>
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">產品分類</th>
          <th class="py-2 px-4 border-b">排序</th>
          <th class="py-2 px-4 border-b">創建時間</th>
          <th class="py-2 px-4 border-b">狀態</th>
          <th class="py-2 px-4 border-b">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categoryData" :key="category.id" class="hover:bg-gray-100">
          <td class="py-2 px-4 border-b">{{ category.name }}</td>
          <td class="py-2 px-4 border-b">{{ category.sort_order }}</td>
          <td class="py-2 px-4 border-b">{{ formatDate(category.created_at) }}</td>
          <td class="py-2 px-4 border-b">
            <span
              :class="category.status === 'active' ? 'text-green-500' : 'text-red-500'"
            >
              {{ category.status === 'active' ? '啟用' : '停用' }}
            </span>
          </td>
          <td class="py-2 px-4 border-b">
            <button @click="editCategory(category.id)" class="text-blue-500 hover:underline">
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-end mt-4">
      <nav class="flex items-center">
        <button
          :disabled="pagination.currentPage === 1"
          @click="changePage(pagination.currentPage - 1)"
          class="px-3 py-1 border rounded-l disabled:opacity-50"
        >
          上一頁
        </button>
        <span class="px-4 py-1 border-t border-b">
          第 {{ pagination.currentPage }} 頁 / 共 {{ pagination.totalPages }} 頁
        </span>
        <button
          :disabled="pagination.currentPage === pagination.totalPages"
          @click="changePage(pagination.currentPage + 1)"
          class="px-3 py-1 border rounded-r disabled:opacity-50"
        >
          下一頁
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCategory',
  data() {
    return {
      categories: [], // 產品分類數據
      selectedCategory: '', // 選中的分類ID
      categoryData: [], // 表格顯示的分類數據
      pagination: {
        currentPage: 1,
        totalPages: 1,
      },
    };
  },
  mounted() {
    this.fetchCategories();
    this.fetchCategoryData();
  },
  methods: {
    fetchCategories() {
      fetch('http://localhost:3000/categories')
        .then(response => response.json())
        .then(data => {
          this.categories = data;
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    },
    queryCategories() {
      this.fetchCategoryData();
    },
    addCategory() {
      this.$router.push('/add-category');
    },
    editCategory(id) {
      this.$router.push(`/edit-category/${id}`);
    },
    fetchCategoryData(page = 1) {
      const params = new URLSearchParams();
      if (this.selectedCategory) {
        params.append('category', this.selectedCategory);
      }
      params.append('_page', page);
      params.append('_limit', 5); // 每頁顯示 5 條數據
      fetch(`http://localhost:3000/categories?${params.toString()}`)
        .then(response => {
          const total = response.headers.get('X-Total-Count');
          this.pagination = {
            currentPage: page,
            totalPages: Math.ceil(total / 5),
          };
          return response.json();
        })
        .then(data => {
          this.categoryData = data;
        })
        .catch(error => {
          console.error('Error fetching category data:', error);
        });
    },
    changePage(page) {
      if (page < 1 || page > this.pagination.totalPages) return;
      this.fetchCategoryData(page);
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleString();
    },
  },
};
</script>

<style scoped>
/* 可選的樣式 */
</style>
