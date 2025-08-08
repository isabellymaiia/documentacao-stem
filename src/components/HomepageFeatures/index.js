import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Empoderamento',
    Img: require('@site/static/img/valores/empoderamento.png').default,
    description: <>Acreditamos na capacidade de meninas e mulheres ocuparem o protagonismo em qualquer espaço.</>,
  },
  {
    title: 'Diversidade e Inclusão',
    Img: require('@site/static/img/valores/diversidade.png').default,
    description: <>Valorizamos múltiplas vozes, histórias e experiências que constroem um ambiente mais justo e acolhedor.</>,
  },
  {
    title: 'Curiosidade',
    Img: require('@site/static/img/valores/curiosidade.png').default,
    description: <>A vontade de aprender move nossa jornada. Buscamos conhecimento de forma ativa e contínua.</>,
  },
  {
    title: 'Protagonismo',
    Img: require('@site/static/img/valores/protagonismo.png').default,
    description: <>Somos protagonistas das nossas histórias e dos projetos que desenvolvemos juntas.</>,
  },
  {
    title: 'Respeito',
    Img: require('@site/static/img/valores/respeito.png').default,
    description: <>Cultivamos um ambiente baseado no respeito mútuo, na escuta ativa e na empatia.</>,
  },
  {
    title: 'Coragem',
    Img: require('@site/static/img/valores/coragem.png').default,
    description: <>Agimos com coragem para enfrentar desafios e transformar a realidade ao nosso redor.</>,
  },
];


function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')} style={{ marginBottom: '2rem' }}>
      <div className="text--center">
        <img src={Img} alt={title} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '12px' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center" style={{ margin: '2rem', color: '#000000ff' }}>
          Nossos Valores
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
