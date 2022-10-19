import './style.css'

export function Suggestion() {
    return (
        <div className="container-suggestion">

            <div className="header-suggestion" >
                <img src="https://avatars.githubusercontent.com/u/104379480?v=4" />
                
                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>Richardiiisx_</span>
                        <p>Richard 🐉</p>
                    </div>

                    <button className="switch">Mudar</button>

                </div> 
            </div>

            <div className="header-main-suggestion" >
        
                <p>Sugetões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion" >

                <div className="infos-suggestion" >
                    <img src="https://avatars.githubusercontent.com/u/110677755?v=4" />

                    <div className="info-suggestion" >
                        <span>marquin_aquino</span>
                        <p>Seguido por Proa</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion" >
                    <img src="https://avatars.githubusercontent.com/u/31936044?v=4" />

                    <div className="info-suggestion" >
                        <span>iuricode</span>
                        <p>Seguido por o_joaozx</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr75WuQN7GjiZh4BIg_ZKlxQGs1a-71Hy_SHFEh3kkjRetddRuRT-BOoiJ1LwGSGLjTR0&usqp=CAU" />

                    <div className="info-suggestion" >
                        <span>skurtbrasil</span>
                        <p>Seguido por jao_victor__</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion" >
                    <img src="https://avatars.githubusercontent.com/u/2840?v=4" />

                    <div className="info-suggestion" >
                        <span>akitaonrails</span>
                        <p>Seguido por gab.augustoz</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion" >
                    <img src="https://m.media-amazon.com/images/M/MV5BZmE0NzNiNzQtYTVlYS00MjljLWE4MTgtYzYxNjU2NjZkM2M4XkEyXkFqcGdeQXVyNjY5NDgzNjQ@._V1_.jpg" />

                    <div className="info-suggestion" >
                        <span>daniel9340</span>
                        <p>Seguido por gab.augustoz</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

            </div>

            <footer className="footer-suggestion" >
            <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Idioma &bull;</p>
            
            <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>
    )
}