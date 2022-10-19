import './style.css'
import { Story } from '../Story'
import { Post } from '../Post'
import { Suggestion } from '../Suggestion'

export function Layout() {
    return (
        <>
        
            <div className='MainGrid'>

                <div className='first-column' style={{gridArea: "firstColumn"}}>
                    <div className="box" style={{margin: "15px 0"}}>
                        <Story />
                    </div>

                    <div className="box" style={{margin: "15px 0"}}>
                        <Post  />
                    </div>
                    
                </div>
                

                <div className="suggestionBox" style={{gridArea: "secondColumn", margin: "15px 0"}}>
                    <div className="suggestionBox" >
                        <Suggestion />
                    </div>                    
                </div>

            </div>
                    
        </>
    )
}