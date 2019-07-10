<template>
	<div class="home">
    {{message}}
    <!-- <button @click="change()"></button> -->
     <p>obj.a: {{obj.a}}</p>
    <p>obj.a: <input type="text" v-model="obj.a"></p>
<br>
       <p>FullName: {{fullName}}</p>
      <p>FirstName: <input type="text" v-model="firstName"></p>

	</div>
</template>
<script>
  // import { fetchPost, fetchGet } from '@/axios/index'
  // import $ from 'jquery'
	export default {
		data() {
			return {
        message: 1,
        obj: {
          a: 123
        },
        firstName: 'daweo',
        lastName: 'Lou',
        fullName: '我是初始值'
			}
    },
    computed: {
      setMessage () {
        return this.message + 1
      },
      setMessage1 () {
        return this.obj.a + 1
      }
    },
		created() {
      // console.log(this._watchers)
    },
    mounted () {
      //  console.log(this.message = 23)
      console.log(this.setMessage)
      console.log(this.setMessage1)
      console.log(this.message = 23)
      console.log(this.setMessage)
      // this.change()
       console.log(this._watchers)
    },
    watch: {
      'message': function (ne, old) {
        console.log('ne, old', ne, old)
      },
      // 'obj.a': function(ne, old) {
      //   console.log('ne, old2', ne, old)
      // },
     'obj.a': {
        handler(newName, oldName) {
          this.obj.a = 'adfasdfaad'
          console.log('obj.a changed');
        },
        immediate: true
        // deep: true
      },
      // 'firstName': function(newName, oldName) {
      //   // console.log('newName, oldName', newName, oldName)
      //   this.fullName = newName + ' ' + this.lastName;
      // }
      firstName: {
        handler(newName, oldName) {
          this.fullName = newName + ' ' + this.lastName;
        },
      //  代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
        immediate: true
      }
    },
    methods: {
      change () {
        setTimeout(() => {
          this.obj.a = '888'
        }, 1000)
      }
    }
	}
</script>
<style>
	.el-containe {
 		background-color: teal;
	}
	.el-header {
		background-color: blue;
	}
	.main_aside{
		width: 200px!important;
		background-color: #999;
	}
	.el-main {
		background-color: #666;
	}
</style>
