import {ref,
onMounted,onBeforeMount,
onUpdated,onBeforeUpdate,
onUnmounted,onBeforeUnmount



} from './vue.js'

export default{
    
    setup() {
        console.log('counter setup')
        const number = ref(0)
        const clickNumber = () => {
            number.value+=1
        }

onMounted(()=>{
    console.log
})

        return{
            number,
            clickNumber,
        }
    },
    template:
    `<button type ="button" @click="clickNumber"> 
    {{number}} 
    </button>`

}