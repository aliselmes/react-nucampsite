import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export default class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderCampsite(campsite) {
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if(comments) {
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => 
                    <div>
                        <p>{comment.text}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p> 
                    </div>
                    )}
                </div>
            );
        }
        return(
            <div></div>
        );
    }

    render() {
        return (
            <div>
            {
            this.props.campsite 
            ? <div className="row">
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
              </div> 
            : <div></div>
            }
            </div>
        );
    }
}