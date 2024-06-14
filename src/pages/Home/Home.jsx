import './Home.scss'
import { App } from '../../App'

export const Home = ()=> {
return (
        <>
        <h1 className='Home'>Home</h1>
        <ul>
        {App.photos((photo) => (
          <li key={photo.id}><img src={photo.url} alt="" /></li>
        ))}
      </ul>
        </>
    )
}
export default Home