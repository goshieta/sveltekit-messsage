  <script lang="ts">  
    type Props = {
      isOpen: boolean;
      message: string;
      onSelect: (selectedItem: boolean) => void;
    };
    let {
      isOpen = $bindable(),
      message,
      onSelect,
    }: Props = $props();
  </script>
  
  <div style="display:{isOpen?'flex':'none'}" class="back_shadow">
    <div class="dialog">
        <div class="dialog_cotent">
            <div
              class="message_area"
            >
              {message}
            </div>
            <div class="handle_area">
                <button
                  onclick={() => {
                    onSelect(false);
                    isOpen = false;
                  }}>キャンセル</button
                >
                <button
                onclick={() => {
                  onSelect(true);
                  isOpen = false;
                }}>続行</button
              >
            </div>
          </div>
    </div>
</div>
  
  <style>
    .back_shadow{
        z-index: 100;
        position: fixed;
        width: 100%;
        height: 100vh;
        top:0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dialog{
        background-color: white;
        min-width: 200px;
        padding: 20px;
    }
    .dialog_cotent {
      max-width: 300px;
      text-align: center;
    }
    .message_area {
      margin: 30px 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow-wrap: break-word;
      text-align: center;
    }
    .handle_area {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  </style>