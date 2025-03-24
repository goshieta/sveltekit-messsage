<script lang="ts">
    import dangerous from "$lib/dangerous";
    import message from "$lib/message";

    const handleClick=async()=>{
        const result=await message("本当に続行しますか？")
        if(result){
            dangerous()
        }
    }
</script>

<button onclick={handleClick}>危険な操作</button>