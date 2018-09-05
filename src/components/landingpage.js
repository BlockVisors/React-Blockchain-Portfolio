import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: "100%", margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
                            alt="avatar"
                            className="avatar-img"
                            />
                        <div className="banner-text">
                            <h1> Blockchain Developers</h1>

                            <hr/>
                        <p>Javascript | React | Node.js |Token Development | Custom Blockchain | HyperLedger</p>
                        </div>
                        <div className="social-links">
                            {/* Linked in*/}
                            <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                             {/* github */}
                             <a href="http://www.github.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                             {/* Facebook */}
                             <a href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook-f" aria-hidden="true" />
                            </a>

                             {/* angellist */}
                             <a href="http://angel.co" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-angellist" aria-hidden="true" />
                            </a>
                            
                             {/* medium */}
                             <a href="http://www.medium.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-medium" aria-hidden="true" />
                            </a>

                             {/* youtube */}
                             <a href="http://www.youtube.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-youtube" aria-hidden="true" />
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Landing;