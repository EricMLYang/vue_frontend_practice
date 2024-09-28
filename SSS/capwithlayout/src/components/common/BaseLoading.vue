<script setup>
import { watch} from 'vue'
const props = defineProps({
    pLoading: {
        type: Boolean, 
        default: false
    },
    pText: {
        type: String,
        default: 'Loading...'
    }
}) 

watch(
    () => props.pLoading,
    (newVal,oldVal) => {
        console.log('change', newVal, oldVal)
    }
)

</script>
<template>
    <div v-if="props.pLoading" > 
        <!-- loading with fontawsome -->
        <!-- ref=https://fontawesome.com/docs/web/style/animate -->
 
        <span class="fa-2x">
            <font-awesome-icon icon="fa-solid fa-globe" class="fa-beat-fade mx-3" style="--fa-beat-fade-opacity: 0.1; --fa-beat-fade-scale: 1.25;" />
            {{ pText }}
        </span> 

        <!-- loading with dasiy UI -->  
        <!-- ref=https://daisyui.com/components/loading/ 
        <span class="loading loading-bars loading-md"></span> 
        <span v-show="pText.length > 0">{{ pText }}</span> 
        -->
    </div> 
    <div v-else>
        <slot></slot>
    </div>
</template>