import styles from '../styles/Sectionbar.module.css'

type Props = {
    name: string
};

export default function SectionBar(props: Props) {
    return (
        <div className={styles.sectionBar}>
            <section>
                <h4>{props.name}</h4>
            </section>
        </div>
    )
}
