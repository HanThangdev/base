import { CALCULATE } from "@constants";

/* eslint-disable class-methods-use-this */
class Calculator {
	invest_per_quarter: number;

	how_long_do_you_invester: number;

	management_fee: number;

	carry: number;
  
	expected_return_multiple: number;

	constructor(
		invest_per_quarter: number,
		how_long_do_you_invester: number,
		management_fee: number,
		carry: number,
		expected_return_multiple: number
	) {
		this.invest_per_quarter = invest_per_quarter;
		this.how_long_do_you_invester = how_long_do_you_invester;
		this.management_fee = management_fee;
		this.carry = carry;
		this.expected_return_multiple = expected_return_multiple;
	}

	investmentCapital():number{
    return this.invest_per_quarter * this.how_long_do_you_invester
  }

  distribution(){
    return this.investableCapital() * this.expected_return_multiple
  }

  
  netReturnMultiple(){
    return this.netDistributionPaidOutToTheInvestor() / this.investmentCapital()
  }

  contributedCapital(){
    return this.invest_per_quarter  * this.how_long_do_you_invester
  }

  managementFees(){
    return this.contributedCapital() * ((this.management_fee/100)*CALCULATE.PAID_YEAR)
  }

  goemonAdminFees(){
    return this.contributedCapital() * ((CALCULATE.GOEMON_ADMIN_FEES_PERCENT)*CALCULATE.PAID_YEAR)
  }

  investableCapital():number{
    return this.contributedCapital() - (this.managementFees() + this.goemonAdminFees())
  }

  carryPaidToTheFundManager(){
    return ( this.distribution() - this.contributedCapital() ) * (this.carry/100)
  }

  netReturns(){
    return 1
  }

  netDistributionPaidOutToTheInvestor(){
    return this.distribution() - this.carryPaidToTheFundManager()
  }

}

export default Calculator;
