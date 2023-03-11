const mlink = document.createElement('link');
mlink.rel = 'stylesheet';
mlink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.head.appendChild(mlink);

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css';
document.head.appendChild(link);

var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js';
document.head.appendChild(script);
(function() {
    let template = document.createElement("template");
    template.innerHTML = ``;
    class Widget extends HTMLElement {
        constructor() {
           
            super();
            let shadowRoot = this.attachShadow({
                mode: "open"
            });
            shadowRoot.appendChild(template.content.cloneNode(true));
            this._props = {};
        }
        async connectedCallback() {
            this.initMain();
        }
        async initMain() {
          if(this._props.success!==""){
               var notyf = new Notyf();
              notyf.success({
                  message:'<i style="vertical-align: -6px;" class="material-icons">check_circle</i> '+this._props.success,
                  duration: 4000,
                  icon: true,
                  dismissible:true,
                  position:{x:'center',y:'bottom'}
              });
          }
          
          if(this._props.error!==""){
              var notyf = new Notyf();
              notyf.error({
                  message: '<i style="vertical-align: -6px;" class="material-icons">cancel</i> '+this._props.error,
                  duration: 600000,
                  icon: true,
                  dismissible:true,
                  position:{x:'center',y:'bottom'}
                });
           }
           
           if(this._props.info!==""){
              const notyf = new Notyf({
                  types: [
                    {
                      type: 'info',
                      background: '#3fa4fc',
                      icon: true,
                    }
                  ]
                });
                
                notyf.open({
                  type: 'info',
                  message: '<i style="vertical-align: -6px;" class="material-icons">info</i> '+this._props.info,
                  duration: 4000,
                  dismissible:true,
                  position:{x:'center',y:'bottom'}
                });
           }
           
           if(this._props.warning!==""){
              const notyf = new Notyf({
                  types: [
                    {
                      type: 'warning',
                      background: '#e8d902',
                      icon: true
                    }
                  ]
                });
                
                notyf.open({
                  type: 'warning',
                  message: '<i style="vertical-align: -6px;" class="material-icons">warning</i> '+this._props.warning,
                  duration: 4000,
                  dismissible:true,
                  position:{x:'center',y:'bottom'}
                });
           }
          
        }
    
    setValue(){
        this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    success: "",
                    error:"",
                    info:"",
                    warning:""
                }
            }
        }));
    }
        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = {
                ...this._props,
                ...changedProperties
            };
        }
        onCustomWidgetAfterUpdate(changedProperties) {
            this.initMain();
            this.setValue();
        }
    }
    customElements.define("com-rohitchouhan-sap-sweetnotification", Widget);
})();