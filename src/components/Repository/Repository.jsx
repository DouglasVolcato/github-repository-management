export default function Repository(props) {
  if (props.repo.name.toLowerCase().includes(props.repoName.toLowerCase())) {
    return (
      <section>
        <div>{props.repo.name}</div>{" "}
        <a href={props.repo.svn_url} target="_blank">
          <button>Ver repositório</button>
        </a>
      </section>
    );
  }
}
