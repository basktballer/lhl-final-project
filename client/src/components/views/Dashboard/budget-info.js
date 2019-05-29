import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class BudgetInfo extends Component {
  // let { budget, line_items, budget_members, sumObjectValues} = props;
  render() {
    // const totals = this.props.sumObjectValues(this.props.line_items, 'amount')
    let newDate = this.props.budget.created_at;

    return (
      <Row className="budgetInfo">
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Container>
            <Row>
              <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                <h2>{this.props.budget.name}</h2>
                <p className="createdDate">Created on: {new Date(newDate).toDateString()}</p>
              </Col>
              <Col className="budgetTotal" xl={6} lg={6} md={6} sm={6} xs={6}>
                <p><span>Overall total:</span> ${this.props.budget_total.overall_total}</p>
                <p><span>Shared total:</span> ${this.props.budget_total.shared_total}</p>
                <p><span>Squabbled expenses:</span> ${this.props.budget_total.other_total}</p>
                <p><span>You owe:</span> ${this.props.currentUserSubtotal}</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    )
  }
}

export default BudgetInfo;
