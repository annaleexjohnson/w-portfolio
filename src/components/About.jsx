import React from 'react'
import Button from '../assets/Button'
import SectionTitle from "../assets/SectionTitle"
import style from "../styles/about.module.scss"

function About() {
  return (
    <>
    <SectionTitle title="About Me"/>

    <div id="about" className={style.about}>

        <div className={style.skills}>
            <div className={style.skills__list}>
                <div className={style.skills__pic}></div>

                <div className={style.list__item}>
                    <h1>Languages</h1>
                    <p>Python (Pandas, NumPy, Scikit-Learn) &#8226; SQL &#8226; HTML &#8226; CSS &#8226; C++</p>
                </div>
                <div className={style.list__item}>
                    <h1>Machine Learning</h1>
                    <p>Hypothesis Testing &#8226; Linear Regression &#8226; Logistic Regression &#8226; Classification &#8226; K-Means Clustering &#8226; KNN &#8226; Random Forest</p>
                </div>
                <div className={style.list__item}>
                    <h1>Data Visualization</h1>
                    <p>JSON &#8226; CSV &#8226; API</p>
                </div>
                <div className={style.list__item}>
                    <h1>Data Collection</h1>
                    <p>MatplotLib &#8226; Seaborn &#8226; Plotly &#8226; Tableau &#8226; Power BI &#8226; Bokeh &#8226; D3.js &#8226; Tableau</p>
                </div>
            </div>
        </div>
        <Button text="View Resume" linkto="../src/assets/Resume-Wasinee.pdf"/>
    </div>
    <div className={style.summary}>
            <div className={style.summary__pic}></div>
            <div className={style.summary__par}>
                <p >Hello! My name is Wasinee and I am seeking a position in data science, data engineering, or data analytics. I recently graduated from a rigorous 6 month data science program with over 650 hours of work, 14 projects, and 1:1 mentorship. This program emphasized using various technologies such as Git, SQL, and Python to organize projects, manage data, and solve problems. 
                <br/>
                <br/>
                For my first capstone project, I had to figure out the best prices for a ski resort to set their weekend price while comparing their data to their competitors. I had to identify the problem, data wrangling, exploratory data analysis, preprocessing and training data development, modeling, documentation, and presented my work. For my second capstone, I used Arima, Linear Regression, and Random Forest for US Stock predictions by using over 4000 stocks and assess the risks. The model had a 0.03 cent average residual.
                <br/>
                <br/>
                In my free time I like to play badminton and Ping-Pong. I am also a dog mom and super proud of my little guy. He is a handful, but he is the most loyal and loving friend. I also practice Thai Classical Dance and Music and love to perform.
                </p>
            </div>
        </div>
    </>
    
  )
}

export default About