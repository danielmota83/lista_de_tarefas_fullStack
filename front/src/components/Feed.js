import userIcon from '../images/user.svg';
import clockIcon from '../images/clock.svg';
import emptyFolderIcon from '../images/empty-folder.svg';
import loader from '../images/loader-primary.svg'
import '../styles/Feed.css';
import cloudErrorIcon from '../images/cloud-error.svg'
import FeedStatus from './FeedStatus';

export default function Feed(props) {
  if(props.isLoading) {
    return <img src={loader} alt="Loading"  className='spin'/>
  }

if (props.hasError){
  return (<FeedStatus
    image = {cloudErrorIcon}
    title = "Algo deu errado"
    subtitle= "Não foi possível carregar o seu feed!"
    />);
}

  if (props.tasks.length === 0) {
    return (<FeedStatus
       image = {emptyFolderIcon}
       title = "Tarefa não foi encontrada"
       subtitle= "Parece que vocên ainda náo cadastrou tarefas, comece agora!"
       />);
    }


  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </header>

      <section className="feed">
        {props.posts.map((post) => (
          <article key={post.id}>
            <p>{post.content}</p>

            <footer>
              <div className="user-details">
                <img src={userIcon} alt="User" />
                <strong>{post.userName}</strong>
              </div>

              <div className="time">
                <img src={clockIcon} alt="Clock" />
                <span>Publicado em {post.publishedAt.toLocaleDateString('pt-br')}</span>
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
