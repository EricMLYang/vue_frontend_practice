<script setup>
import { computed } from "vue"

// [Property] component props in
const props = defineProps({
  pDatas: { 
    type: [Array], 
    required: true, 
    default: [ 
        { name: 'abc', no: 222, key:'dtesv3d32k-111', email : 'dtesv3d32k-111@auo.com'}, 
        { name: 'efg', no: 121, key:'d3esv3d2k2-157', email : 'd3esv3d2k2-157@auo.com'}
    ] 
  },
  pColumns: { 
    type: [Array], 
    required: true, 
    default: [
        { key: 'no', title: '#', width: 400 ,slot: false},
        { key: 'name', title: '名', width: 300 ,slot: false},
        { key: 'email', title: 'Mail', width: 600 ,slot: false},
        { key: 'action', title: 'Action', width: '*' ,slot: true}
    ]
  }
});

const headerWidth = function (head) {
    if (head.width === '*') {
        return { width: 'atuo' }
    } else {
        return { width: `${head.width}px` }
    }
}

const pdata = computed(() => {
    return props.pDatas
})

const slotname = (row) => {
    const slotName = 'col-' + row.key
    console.log(slotName)
    return slotName
}

</script>

<template>  
    <table class="w-full border-collapse">
        <thead>
            <tr class="bg-[#FFE664] text-left">
                <th class="border border-slate-100 p-3"
                    v-for="head in props.pColumns"
                    :key="head.key"
                    :style="headerWidth(head)">
                    {{ head.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-zinc-600 odd:bg-[#F0F0F0]"
                v-for="row in pdata">
                <td class="min-w-[64px] border border-slate-100 p-3"
                    v-for="head in props.pColumns"
                    :key="head.key">
                    <slot v-if="head.slot" 
                        :name="slotname(head)"
                        :scope="row"></slot>
                    <span v-else>{{ row[head.key] }}</span>
                </td>
            </tr>
        </tbody>                        
    </table> 
</template>
