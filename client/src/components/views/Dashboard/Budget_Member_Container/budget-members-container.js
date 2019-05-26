import React, { Component } from 'react';
import BudgetMember from './budget-member.js';

class BudgetMembersContainer extends Component {
  render() {
    return (
      <div className="budgetMembers">
        <p>Budget Members Container</p>
        {this.props.budget_members.map(member => <BudgetMember name={member.id} />)}
      </div>
      )
    }
  }

  export default BudgetMembersContainer;
