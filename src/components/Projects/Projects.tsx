import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./projects.module.css"
import Image from 'next/image'
import { allProjects, Project } from './allProjects'

const Projects = ({
    lo

}: {
    lo: string
}) => {
  return (
    <section id="projects" className={lo === "ar" ? styles.projects + " " + styles.ar : styles.projects}>
        <div className="container">
            <MainHeading>
                <h2>
                    {/* {t("projects.MainHeading.H2")} */}
                    Some of Our Projects
                </h2>
            </MainHeading>
            <div className={styles.projectsCards}>
                {
                    allProjects.map((project: Project, index: number) => {
                        return(
                            <div key={project.id} className={styles.card}>
                                <div>
                                    <Image src={project.src} alt={`project ${index + 1}`} loading='lazy'></Image>
                                </div>
                            </div>
                        )
                    })
                }
                <div className={styles.card}>
                        <div>
                            <video src="/videos/25.mp4" controls muted></video>
                        </div>
                </div>
                <div className={styles.card}>
                        <div>
                            <video src="/videos/26.mp4" controls muted></video>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects