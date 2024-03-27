import Modal from "../components/modalComponents/modal";
import MainPage from "../components/primaryPageContent/mainpage"

//Subset of data requested Via: https://absorbed-deluxe-nyala.glitch.me/api/seasons 
const years = [{"year":2009,"url":"http://en.wikipedia.org/wiki/2009_Formula_One_season"},{"year":2008,"url":"http://en.wikipedia.org/wiki/2008_Formula_One_season"},{"year":2007,"url":"http://en.wikipedia.org/wiki/2007_Formula_One_season"},{"year":2006,"url":"http://en.wikipedia.org/wiki/2006_Formula_One_season"},{"year":2005,"url":"http://en.wikipedia.org/wiki/2005_Formula_One_season"},{"year":2004,"url":"http://en.wikipedia.org/wiki/2004_Formula_One_season"},{"year":2003,"url":"http://en.wikipedia.org/wiki/2003_Formula_One_season"},{"year":2002,"url":"http://en.wikipedia.org/wiki/2002_Formula_One_season"},{"year":2001,"url":"http://en.wikipedia.org/wiki/2001_Formula_One_season"},{"year":2000,"url":"http://en.wikipedia.org/wiki/2000_Formula_One_season"},{"year":1999,"url":"http://en.wikipedia.org/wiki/1999_Formula_One_season"},{"year":1998,"url":"http://en.wikipedia.org/wiki/1998_Formula_One_season"},{"year":1997,"url":"http://en.wikipedia.org/wiki/1997_Formula_One_season"},{"year":1996,"url":"http://en.wikipedia.org/wiki/1996_Formula_One_season"},{"year":1995,"url":"http://en.wikipedia.org/wiki/1995_Formula_One_season"},{"year":1994,"url":"http://en.wikipedia.org/wiki/1994_Formula_One_season"}];
const data = {years: years}
export default function Root() {
    return (
        <div>
            <MainPage data={data}></MainPage>
        </div>
    )
}