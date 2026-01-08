import { Component } from '@angular/core';
import { DashboardCard } from '../../../dist/eos-comp';

@Component({
  selector: 'app-card-page',
  imports: [ DashboardCard ],
  templateUrl: './card-page.html',
  styleUrl: './card-page.css',
})
export class CardPage {

  onDashboardClick(){
    console.log('dasboard click');
  }

  categoryList = [
    {
      key:'Assets',
      toolTipText: "",
      value:'₹ 2,74,26,805'
    },
    {
      key:'Liabilities',
      toolTipText: "Loan Details Auto-Updated",
      value:'₹ 5,97,600'
    },
    {
      key:'Insurance',
      toolTipText: "",
      value:'₹ 1,50,00,000'
    },
    {
      key:'Income',
      toolTipText: "Loan Details Auto-Updated",
      value:'₹ 22,37,078'
    },
    {
      key:'Expense',
      toolTipText: "Salary Income",
      value:'₹ 3,99,999.96'
    }
  ]
  
  creditCardObj = {
    imgUrl: 'https://imaages-hosting-1fin.s3.ap-south-1.amazonaws.com/assets/fund-logos/Credit-Card-Logos/Axis.png',
    cardName: 'Axis Platinum Card',
    handleClick: () => this.onCardClick()
  };
  onCardClick() {
    console.log('Credit card clicked!');
  }

  carousalTestData = [
    {
      "fund1": "Nippon India Index Fund - Nifty 50 Plan",
      "fund2": "Canara Robeco Large Cap Fund",
      "overlap": 71,
      "start": 14.5,
      "end": 14.5
    },
    {
      "fund1": "Franklin India Opportunities Fund",
      "fund2": "Franklin India Multi Cap Fund",
      "overlap": 63,
      "start": 18.5,
      "end": 18.5
    },
    {
      "fund1": "Franklin India Flexi Cap Fund",
      "fund2": "Canara Robeco Large Cap Fund",
      "overlap": 56,
      "start": 22,
      "end": 22
    },
    {
      "fund1": "Franklin India Flexi Cap Fund",
      "fund2": "Nippon India Index Fund - Nifty 50 Plan",
      "overlap": 55,
      "start": 22.5,
      "end": 22.5
    },
    {
      "fund1": "Canara Robeco Large Cap Fund",
      "fund2": "Canara Robeco Value Fund",
      "overlap": 45,
      "start": 23,
      "end": 23
    }
    ];
    
    mfholdingpielist =[
    { 
      label: "Equity", 
      equityPercentage: 97, 
      equityValue: 8.1 
    }
    ]

    list = ["Male", "26 years,Married, 1 kid","Industry Name -,Mumbai, Maharashtra","Source -"]

    attendanceSvg = `
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#FFDDDA"></rect><path _ngcontent-ng-cli-universal-c3109344089="" fill-rule="evenodd" clip-rule="evenodd" d="M19.0217 25.8698C19.0217 25.8698 18.0435 25.8698 18.0435 24.8916C18.0435 23.9133 19.0217 20.9785 22.9348 20.9785C26.8478 20.9785 27.8261 23.9133 27.8261 24.8916C27.8261 25.8698 26.8478 25.8698 26.8478 25.8698H19.0217Z" fill="#F35B4D">
              </path>
              <path _ngcontent-ng-cli-universal-c3109344089="" fill-rule="evenodd" clip-rule="evenodd" d="M22.9348 20.0004C24.5556 20.0004 25.8696 18.6865 25.8696 17.0656C25.8696 15.4448 24.5556 14.1309 22.9348 14.1309C21.3139 14.1309 20 15.4448 20 17.0656C20 18.6865 21.3139 20.0004 22.9348 20.0004Z" fill="#F35B4D">
              </path>
              <path _ngcontent-ng-cli-universal-c3109344089="" fill-rule="evenodd" clip-rule="evenodd" d="M17.2768 25.8688C17.1391 25.5909 17.0651 25.2615 17.0651 24.8906C17.0651 23.5646 17.7294 22.2009 18.959 21.2514C18.4211 21.0794 17.794 20.9775 17.0651 20.9775C13.1521 20.9775 12.1738 23.9123 12.1738 24.8906C12.1738 25.8688 13.1521 25.8688 13.1521 25.8688H17.2768Z" fill="#F35B4D"></path>
              <path _ngcontent-ng-cli-universal-c3109344089="" fill-rule="evenodd" clip-rule="evenodd" d="M16.5761 19.9997C17.9268 19.9997 19.0218 18.9047 19.0218 17.5541C19.0218 16.2034 17.9268 15.1084 16.5761 15.1084C15.2254 15.1084 14.1305 16.2034 14.1305 17.5541C14.1305 18.9047 15.2254 19.9997 16.5761 19.9997Z" fill="#F35B4D"></path>
          </svg>
`;
}
