
import {toast,Toaster} from "sonner"

const App=()=>{
  return (<>
    <h1>Toast Notification</h1>
    <button onClick={()=>toast.success("saved")}>Success</button>
    <button onClick={()=>toast.error("error 404")} >Error</button>
    <button onClick={()=>toast.warning("warning")}>Warning</button>
    <button onClick={()=>toast.info("infor")}>Information</button>
    <Toaster position="top-center"
        richColors
        duration={5000}
        closeButton={true}
        visibleToasts={4}
    />
  </>)
}
export default App