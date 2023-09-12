'use client'
export default function InteractiveCard ({children ,contentName}: {children : React.ReactNode, contentName:string}) {

    function onCardSelected(){
        alert("Card is Clicked " + contentName);
    }

    function onCardMouseAction(event: React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl')
            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('bg-neutral-200')
        }else{
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shaodw-lg')
            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.add('bg-white')
        }
    }

    return (
        <div className="w-[300px] h-[300px] round-lg shoadow-lg bg-white relative top-[20px]" 
        onClick={()=>onCardSelected()}
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}
        style={{borderRadius: "10px"}}
        >
            {children}
        </div>
    );
}