import React from 'react'
import Button from '../assets/Button'
import SectionTitle from "../assets/SectionTitle"
import style from "../styles/about.module.scss"

function About() {
  return (
    <div className={style.about}>
        <SectionTitle title="About Me"/>
        <div className={style.skills}>
            <div className={style.skills__pic}></div>
            <div className={style.skills__list}>
                <div className={style.skills__lang}>
                    <h1>Languages</h1>
                    <ul>
                        <li>Python (Pandas, NumPy, Scikit-Learn)</li>
                        <li>SQL</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>C++</li>
                    </ul>
                </div>
                <div className={style.skills__ml}>
                    <h1>Machine<br/>Learning</h1>
                    <ul>
                        <li>Hypothesis Testing</li>
                        <li>Linear Regression</li>
                        <li>Logistic Regression</li>
                        <li>Classification</li>
                        <li>K-Means Clustering</li>
                        <li>KNN</li>
                        <li>Random Forest</li>
                    </ul>
                </div>
                <div className={style.skills__visual}>
                    <h1>Data<br/>Visualization</h1>
                    <ul>
                        <li>JSON</li>
                        <li>CSV</li>
                        <li>API</li>
                    </ul>
                </div>
                <div className={style.skills__collection}>
                    <h1>Data<br/>Collection</h1>
                    <ul>
                        <li>MatplotLib</li>
                        <li>Seaborn</li>
                        <li>Plotly</li>
                        <li>Tableau</li>
                        <li>Power BI</li>
                        <li>Bokeh</li>
                        <li>D3.js</li>
                        <li>Tableau</li>
                    </ul>
                    
                </div>
            </div>
        </div>
        <Button text="View Resume"/>
        <div className={style.summary}>
            <div className={style.summary__pic}></div>
            <p className={style.summary__par}>I am seeking a position in data science, data engineering, or data analytics. I am currently enrolled in a rigorous 6 month data science program with over 650 hours of work, 14 projects, and 1:1 mentorship. This program emphasizes using various technologies such as Git, SQL, and Python to organize projects, manage data, and solve problems. 
            <br/>
            <br/>
            For my first capstone project, I had to figure out the best prices for a ski resort to set their weekend price while comparing their data to their competitors. I had to identify the problem, data wrangling, exploratory data analysis, preprocessing and training data development, modeling, documentation, and presented my work. For my second capstone, I used Arima, Linear Regression, and Random Forest for US Stock predictions by using over 4000 stocks and assess the risks. The model had a 0.03 cent average residual.
            <br/>
            <br/>
            In my free time I like to play badminton and Ping-Pong. I am also a dog mom and super proud of my little guy. He is a handful, but he is the most loyal and loving friend. I also practice Thai Classical Dance and Music and love to perform.
            </p>
            
        </div>
    </div>
  )
}

export default About