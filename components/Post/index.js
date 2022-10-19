import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (



        <>
            
            <header className='header-post'>

                <div className="infos-post">

                    <img className="img-header-post" src="https://scontent.fcgh4-1.fna.fbcdn.net/v/t39.30808-6/292034375_5619368528102293_6029481485373763618_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeENkf_0F_qw2yYkZf3w0mrI4htDQUT4niziG0NBRPieLF-sST9ly9VhAt3SmRdhGzoYvYCtCnnmrGT8-aGwhngx&_nc_ohc=LFtqCuD-vGwAX_mglnR&_nc_oc=AQmTLryNL77vbbFag1xDJN_PgryT5cwS6FqHQaufgXFLKG5QDTpY3Ei9Bw2l2hM2duE&_nc_zt=23&_nc_ht=scontent.fcgh4-1.fna&oh=00_AT9lCmS73kl9-JCMegKqpD_PFA6OuddJkdca_iabGXo_hQ&oe=63547AA2" />

                    <p>Corinthians</p>

                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://scontent.fcgh4-1.fna.fbcdn.net/v/t39.30808-6/312282855_5925971587441984_4901320334766891322_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGIK6QdcWOZu5UVaLEsYcrkyyjPkx1qrJvLKM-THWqsm-nLHQtW46CkSjjkQ5KmiBp_RkVDKZbWg0BJy-Kyfmvg&_nc_ohc=nmmmxK5awxsAX_rpFjk&_nc_zt=23&_nc_ht=scontent.fcgh4-1.fna&oh=00_AT9lY_fonfrqr0YmTY7_egaihgQp-AkT1lmP3CI1f-hRGA&oe=6355D6C6" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size:"25px"}}>

                
                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div> 
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div> 
                        
                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>5,110 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>palmeiras</span> não temos mundial e vai corinthians!
                    </p>
                    

                    <p className='coment-1'>
                        Ver todos os 1,100 comentários
                    </p>
                </div>

                <div className="time-post">
                    <time>Há 2 dias &bull; </time><span>Ver tradução</span>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                                <BsEmojiSmile />
                            </div>  

                        </IconContext.Provider>
                        
                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>

            </div>


            <header className='header-post'>

                <div className="infos-post">

                    <img className="img-header-post" src="https://media-exp1.licdn.com/dms/image/D4E0BAQHYCgYovUuPtQ/company-logo_200_200/0/1665755678671?e=1674086400&v=beta&t=AWtOyhjl8TRW7ZMEIw5U3Ey0KmSPouF5buaszpLfCiU" />

                    <p>Oracle</p>

                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://media-exp1.licdn.com/dms/image/C4E22AQGHV0tPP8L7Ug/feedshare-shrink_800/0/1665781501420?e=1669248000&v=beta&t=2nbMcZ8Z1GCN4sbFEi2wdb--kNoB6BldtG5WHizAcTc" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size:"25px"}}>

                
                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div> 
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div> 
                        
                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>1.448 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>instituto_proa</span> ótimo adoramos!
                    </p>
                    

                    <p className='coment-1'>
                        Ver todos os 200 comentários
                    </p>
                </div>

                <div className="time-post">
                    <time>Há 2 dias &bull; </time><span>Ver tradução</span>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                                <BsEmojiSmile />
                            </div>  

                        </IconContext.Provider>
                        
                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>

            </div>





            <header className='header-post'>

                <div className="infos-post">

                    <img className="img-header-post" src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.18169-9/10423652_853821267985795_8831447949640543520_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UlSZmbC7rX0AX9Hrlke&_nc_ht=scontent-gru2-2.xx&oh=00_AT8-_YRpNXTSz2ts3LuroWnd0ac2T_kxqIdemC3bmxnxtA&oe=637393DD" />

                    <p>Fiap</p>

                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://scontent.fcgh14-1.fna.fbcdn.net/v/t39.30808-6/312181674_5991326817568522_4828351194624225813_n.png?stp=dst-png_p480x480&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=kmLiNBxd__QAX8oq8Sw&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT_3vcAD4ZzAhIJMArReFr_r3bMV464PwVQSEVySpq-tbQ&oe=6352E799" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size:"25px"}}>

                
                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div> 
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div> 
                        
                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>987 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <strong>Alura</strong> Vocês são os melhores.
                    </p>

                    <p  className='coment-1'>
                        Ver todos os 991 comentários
                    </p>
                </div>

                <div className="time-post">
                    <time>Há 1 hora &bull; </time><span>Ver tradução</span>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                                <BsEmojiSmile />
                            </div>  

                        </IconContext.Provider>
                        
                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>

            </div>


            <header className='header-post'>

                <div className="infos-post">

                    <img className="img-header-post" src="https://scontent.fcgh4-1.fna.fbcdn.net/v/t39.30808-6/241180583_236086088526536_1244884116000337742_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0hOntcFa2pjjovtwEnHACyz_VXlTcpJ_LP9VeVNykn19oJxvO_ZAeDf7OW5EWr-zKOrYECfM40y1iA5IPAnB9&_nc_ohc=JNmHZiyNzH0AX9AkUmd&_nc_zt=23&_nc_ht=scontent.fcgh4-1.fna&oh=00_AT9aNgbKvZaWb9mucUabBnXOpT3EbC-MWk_XhaLcw-yUQA&oe=635580E0" />

                    <p>rogerguedes23</p>

                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://scontent.fcgh5-1.fna.fbcdn.net/v/t39.30808-6/311576914_407569844902648_7772199085882256987_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFz1YEf4R2GGOEipOxx9o1JuWXL_myTTB-5Zcv-bJNMH8aprqHGwtUt9A8pXXn133khDTJNQm1vIgdICMl1Osgx&_nc_ohc=VnbYhYfrsd0AX853qar&_nc_zt=23&_nc_ht=scontent.fcgh5-1.fna&oh=00_AT--JRmieTHpsgR2KLTYc1_JGai9L5lBS3_7O0rgEl9DpA&oe=6356499C" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size:"25px"}}>

                
                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div> 
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div> 
                        
                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>5,110 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>DuQueiroz</span> vocês dão aulas irmão!!
                    </p>
                    

                    <p className='coment-1'>
                        Ver todos os 1,100 comentários
                    </p>
                </div>

                <div className="time-post">
                    <time>Há 2 dias &bull; </time><span>Ver tradução</span>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                                <BsEmojiSmile />
                            </div>  

                        </IconContext.Provider>
                        
                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>

            </div>



            

            <header className='header-post'>

                <div className="infos-post">

                    <img className="img-header-post" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_100_100/0/1591018493674?e=1674086400&v=beta&t=MhxDXrAuBrulspm_IsOjEwZMRTmut4vhkxla0hz64EQ" />

                    <p>instituto_proa</p>

                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://scontent.fcgh5-1.fna.fbcdn.net/v/t39.30808-6/312049609_5542641915830063_4141120551094409019_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGKxvdKoCEzuoNmuvF4-avDOgw6YCmvDAI6DDpgKa8MAkooKZOTJuzYTWHtLsg3p2kphF1OsQTlGD3MnL-QQq9U&_nc_ohc=KHB1fcYcmAMAX_UQNY4&_nc_zt=23&_nc_ht=scontent.fcgh5-1.fna&oh=00_AT8YVBMf4sENEg4ZhkN7UCpcTlm7fTehZ0KMDbxgA_Xgdw&oe=6352F2DF" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size:"25px"}}>

                
                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div> 
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div> 
                        
                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>124 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <strong>instituto_proa</strong> Alô, PROANE! Vem coisa boa por ai!
                    </p>

                    <p className='coment-1'>Ver todos os 33 comentários</p>
                </div>

                <div className="time-post">
                    <time>Há 5 horas &bull; </time><span>Ver tradução</span>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                                <BsEmojiSmile />
                            </div>  

                        </IconContext.Provider>
                        
                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>

            </div>



            <header className='header-post'>

                <div className="infos-post">

                    <img className="img-header-post" src="https://scontent.fcgh14-1.fna.fbcdn.net/v/t39.30808-6/273144602_10152602977424953_1955203260619408476_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rx_yOMTka0YAX8y58yO&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT95tLYcXoL6qdJftuFemeW7jftxtrZCZJOExDm-tdUQ7w&oe=635456BB" />

                    <p>realmadrid</p>

                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://scontent.fcgh14-1.fna.fbcdn.net/v/t39.30808-6/312194459_10152699312259953_5974074489910743822_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=t375EFFzwKEAX-atjqD&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT893cohsa82SXtqv18xxHw_5atPMHXvhms1MTbO-fyh_A&oe=63537606" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size:"25px"}}>

                
                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div> 
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div> 
                        
                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>1.577.648 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <strong>Real Madrid C.F</strong> 🏆 This time yesterday...
                    </p>

                    <p className='coment-1'>Ver todos os 30,354 comentários</p>
                </div>

                <div className="time-post">
                    <time>Há 8 horas &bull; </time><span>Ver tradução</span>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                                <BsEmojiSmile />
                            </div>  

                        </IconContext.Provider>
                        
                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>

            </div>



            <header className='header-post'>

                <div className="infos-post">

                    <img className="img-header-post" src="https://scontent.fcgh14-1.fna.fbcdn.net/v/t39.30808-6/243095782_416661036495945_3843362260429099279_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OdMlkSCKXPMAX8i-rK2&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT_xV8RST_PFGn21ZmQqzjjlx3XIIhwOVibR4PNVtqnwXQ&oe=63544813" />

                    <p>Nasa</p>

                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://scontent.fcgh14-1.fna.fbcdn.net/v/t39.30808-6/300993118_627947775367269_3084664250349665301_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=495V6X7rjRgAX_-mZPU&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT_UNXp-wIEjaNmN7RU0gx7CSMTZJYoIFVWhgrLQGVOcIQ&oe=6352C946" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size:"25px"}}>

                
                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div> 
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div> 
                        
                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>1.577.648 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <strong>Nasa</strong> Giant news from a giant planet!
                    </p>
                    <p className='coment-1'>
                        Ver todos os outros 11,559 comentários
                    </p>
                </div>

                <div className="time-post">
                    <time>Há 17 horas &bull; </time><span>Ver tradução</span>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                                <BsEmojiSmile />
                            </div>  

                        </IconContext.Provider>
                        
                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>

            </div>


            <header className='header-post'>

                <div className="infos-post">

                    <img className="img-header-post" src="https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.6435-9/88169083_10158000847144361_6114214193026564096_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2VdGvZsdLHQAX-oStO8&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT9HCmhlubYRoPEoHiZtgkJLb1Sfl8wviLAbmgspZKdgmA&oe=6374E759" />

                    <p>bmw</p>

                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://scontent.fcgh14-1.fna.fbcdn.net/v/t39.30808-6/311794613_10160186797244361_856428228412425115_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=bI9JCst87G4AX84bFhU&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT-hmy0mlgBV_juOoR-OnUzb4WTpouRMTEFINGFdp2lmCQ&oe=6353E46D" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size:"25px"}}>

                
                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div> 
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div> 
                        
                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>6.032.748 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <strong>bmw</strong> A car doesn't fit in a pocket? Wait! The new BMW M2 Coupé does...
                    </p>

                    <p className='coment-1'>
                        Ver todos os 5,112 comentários
                    </p>
                </div>

                <div className="time-post">
                    <time>Há 3 semanas &bull; </time><span>Ver tradução</span>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                                <BsEmojiSmile />
                            </div>  

                        </IconContext.Provider>
                        
                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>

            </div>



            <header className='header-post'>

                <div className="infos-post">

                    <img className="img-header-post" src="https://avatars.githubusercontent.com/u/83436288?s=200&v=4" />

                    <p>ackercode</p>

                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://media-exp1.licdn.com/dms/image/sync/C4D27AQG73oi9eqeYyg/articleshare-shrink_800/0/1665849426616?e=1666713600&v=beta&t=mXluUndy5OF031jc43Hgsd4SSdXk5ULSnEl_TWv1-8M" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size:"25px"}}>

                
                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div> 
                            <div className='icon'><BsChat /></div>
                            <div className='icon'><FiSend /></div>
                        </div>

                        <div className='icon'><BsBookmark /></div> 
                        
                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>648 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <strong>ackercode</strong> Dicas em Python🐍
                    </p>
                    <p className='coment-1'>
                        Ver todos os 554 comentários
                    </p>

                </div>

                <div className="time-post">
                    <time>Há 17 horas &bull; </time><span>Ver tradução</span>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                                <BsEmojiSmile />
                            </div>  

                        </IconContext.Provider>
                        
                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>

            </div>
        </>

    )
}