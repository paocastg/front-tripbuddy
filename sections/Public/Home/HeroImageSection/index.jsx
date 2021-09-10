import styles from './index.module.scss'

/* utils */
import { CDN_PATH } from 'assets/Utils/Constants'

/* components */
import Link from 'next/link'

const HeroImageSection = () => {
  const urlImg = `${CDN_PATH}/bg-empieza-viaje.svg`

  return (
    <article
      className={styles.heroImage}
      style={{ backgroundImage: `url('${urlImg}')` }}
    >
      <aside className={styles.heroImage__opacity}>
        <div>
          {/* content */}
          <p className={styles.heroImage__text}>
            Únete a nuestra comunidad y planea tu viaje a la medida
          </p>
          <Link href="/select-trip">
            <button className={styles.heroImage__action}>
              Comienza tu viaje
            </button>
          </Link>
        </div>
      </aside>
    </article>
  )
}

export default HeroImageSection
