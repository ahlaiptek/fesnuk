import { ButtonWhite, ButtonPink } from "../elements/Button";


function Banner (){
    return (
        <div className="relative h-52 w-full">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className="absolute bottom-1/2 translate-y-1/2 left-8 text-white">
                <div className="font-bold text-xl">Find Your Fashion</div>
                <div className="text-sm">Lorem ipsum dolor </div>
                <div className="flex gap-2 pt-2">
                    <ButtonWhite text="Shop"/>
                    <ButtonPink text="discover more"/>
                </div>
            </div>
        
        </div>
    )
}


export default Banner;