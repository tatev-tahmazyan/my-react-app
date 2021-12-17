import './style.css';
import OnlineShopCard from '../Reusable/OnlineShopCard';
import ExportCard from '../Reusable/ExportCard';
import Stars from '../Reusable/Stars';
import TitleH2 from '../Reusable/TitleH2';
import SubtitleP from '../Reusable/SubtitleP';
import {Container,Row} from 'react-bootstrap';

const Section = ()  => {
    return(
        <Container>
            <div className='online-shop-cont p-5 mb-10'>
                <div className="heading-text">
                    <Stars />
                    <TitleH2 
                        text = 'Ինչպես օգտվել'
                    />
                    <SubtitleP
                        text = 'Ինչպե՞ս կատարել օնլայն գնումներ և ստանալ Հայաստանում արագ և ապահով'
                    />
                </div>
                <Row>
                    <OnlineShopCard 
                    text = 'Գրանցվե՛ք մեր կայքում և անվճար ստացե՛ք առաքման հասցեներ'
                    imgUrl = 'https://onex.am/img/svg/step1.svg'
                     />

                    <OnlineShopCard 
                    text = 'Օգտագործե՛ք Ձեզ տրամադրված առաքման հասցեները կայքերից գնումներ կատարելիս'
                    imgUrl = 'https://onex.am/img/svg/step2.svg'
                     />
                    <OnlineShopCard 
                    text = 'Ստացե՛ք Ձեր գնումները ՀՀ բոլոր քաղաքներում և Արցախում'
                    imgUrl = 'https://onex.am/img/svg/step3.svg'
                     />
                </Row>
            </div>


            <div className='export-cont p-2 mb-5 mt-5'>
                <div className="heading-text">
                    <Stars />
                    <TitleH2 
                        text = 'Արտահանում'
                    />
                    <SubtitleP
                        text = 'Ուղարկե՛ք Ձեր փաստաթղթերը, ծանրոցները և բեռները ՀՀ-ից դեպի ԱՄՆ-ի և Ռուսաստանի ցանկացած հասցե'
                    />
                </div>
                <Row>
                    <ExportCard 
                    text = 'Արտահանում ՀՀ-ից դեպի ԱՄՆ'
                    imgUrl = 'https://onex.am/img/pages/export/export_usa.jpg'
                     />

                    <ExportCard 
                    text = 'Արտահանում ՀՀ-ից դեպի Ռուսաստան'
                    imgUrl = 'https://onex.am/img/pages/export/export_rus.jpg'
                     />
                    <ExportCard 
                    text = 'Փաստաթղթերի առաքում ՀՀ-ից դեպի աշխարհի ցանկացած կետ'
                    imgUrl = 'https://onex.am/images/documents-export-small.jpg'
                     />
                </Row>
            </div>
        </Container>
    );
}

export default Section;