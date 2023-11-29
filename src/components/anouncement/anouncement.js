function Anouncement({title, date, topic, speaker}) {
    return (
        <div>
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{topic}</p>
          <p>{speaker}</p>
        </div>
    )
}

export default Anouncement;
