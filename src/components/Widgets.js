import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import APIRequest from '../utils/utils';

class Widgets extends Component {

    constructor(props) {
        super(props)

        APIRequest('http://dev.4all.com:3050/widgets')
        .then(data => {
          this.setState({
            widgets: data,
            isLoaded: true
          })
        })

        this.state = {
          widgets: [],
          isLoaded: false
        }
    }

    render(){

        function numFormat(num) {
            return num > 999 ? (num/1000).toFixed(1) + 'k' : num
        }

        return(

            <div className="row small-up-1 medium-up-2 large-up-4">
            <div className="column column-block">
              <div className="each-score flex el-shadow">
                <div className="icon new-order-icon">
                  <FontAwesome name="shopping-basket fa-3x" />
                </div>
                {this.state.isLoaded !== true ?
                  <div className="info show-loading">
                    <FontAwesome name="spinner fa-spin fa-2x fa-fw" />
                  </div>
                :
                  <div className="info"><span>{this.state.widgets.newOrders}</span>New Orders</div>
                }
              </div>
            </div>
            <div className="column column-block">
              <div className="each-score flex el-shadow">
                <div className="icon new-comment-icon">
                  <FontAwesome name="comment-o fa-3x" />
                </div>
                {this.state.isLoaded !== true ?
                  <div className="info show-loading">
                    <FontAwesome name="spinner fa-spin fa-2x fa-fw" />
                  </div>
                :
                  <div className="info"><span>{this.state.widgets.comments}</span>Comments</div>
                }
              </div>
            </div>
            <div className="column column-block">
              <div className="each-score flex el-shadow">
                <div className="icon new-users">
                  <FontAwesome name="user-o fa-3x" />
                </div>
                {this.state.isLoaded !== true ?
                  <div className="info show-loading">
                    <FontAwesome name="spinner fa-spin fa-2x fa-fw" />
                  </div>
                :
                  <div className="info"><span>{this.state.widgets.newUsers}</span>New Users</div>
                }
              </div>
            </div>
            <div className="column column-block">
              <div className="each-score flex el-shadow">
                <div className="icon page-views">
                  <FontAwesome name="id-card-o fa-3x" />
                </div>
                {this.state.isLoaded !== true ?
                  <div className="info show-loading">
                    <FontAwesome name="spinner fa-spin fa-2x fa-fw" />
                  </div>
                :
                   <div className="info"><span>{numFormat(this.state.widgets.pageViews)}</span>New Users</div>
                }
              </div>
            </div>
          </div>
        );
    }
}

export default Widgets;