import "./style.css";

export default function Mensagem ({ numero }) {
  return (
    <div className="mensagem">
      <h5>Mensagem {numero}</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat pellentesque eleifend donec urna. Morbi at vulputate dictumst nullam at sit. Sed orci, pretium, dolor volutpat mattis accumsan, ornare. Ut diam sem magna ultricies. Nibh pulvinar eget risus risus, sed faucibus in in ac. Enim suspendisse id lobortis euismod fringilla odio. Non in facilisis tortor tellus fringilla in interdum. Magna volutpat justo, pharetra adipiscing mauris sagittis, pellentesque diam. Vestibulum, aenean eu consectetur rhoncus scelerisque at nisl, purus. Sapien tellus consequat ac ornare. Amet, tortor odio velit libero, commodo sagittis cras.</p>
    </div>
  );
}