# Reusable RangePicker Component

The Reusable RangePicker component simplifies date range selection in your React applications. It offers a user-friendly interface, flexibility, and customization options, making it an excellent choice for incorporating date range selection functionality into your projects.

## Features

- **Easy Integration:** Simply import the RangePicker component and start using it in your application.
- **Customization:** Tailor the RangePicker to your needs by configuring various options.
- **Responsive Design:** The RangePicker is designed to work well on both desktop and mobile devices.
- **Custom Inputs:** You can easily provide custom input components.
- **Date Highlighting:** Highlight specific dates on the calendar for easy reference.
- **Inline Mode:** Optionally display the RangePicker inline on your page.

## Getting Started

### Installation

To start using the Reusable RangePicker component in your project, follow these steps:

1. Install the `react-datepicker` package:

   ```bash
   npm install react-datepicker

Import the RangePicker component in your application:

import RangePicker from './RangePicker';

### Usage
## Basic Usage
Here's how to use the DatePicker component in your application:

```
import React, { useState, useRef } from "react";
import { subBusinessDays } from "date-fns";
import RangePicker from './RangePicker'; // Replace with the actual path to your RangePicker component.

function MyComponent() {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() + 7);
  const calRef = useRef(null);

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    defaultStartDate,
    defaultEndDate,
  ]);

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setDateRange([startDate, endDate]);
  };

  return (
    <div>
      <h1>RangePicker</h1>
      <div style={{}}>
        <RangePicker
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          onChange={handleDateChange}
          monthsShown={window.innerWidth < 520 ? 1 : 2}
          selectsRange={true}
          dateFormat="MMM d, yyyy"
          placeholderText="Select a Date"
          customRef={calRef}
          isClearable={false}
        />
      </div>
    </div>
  );
}

export default MyComponent;
```

Customization
The RangePicker component offers various customization options, allowing you to adapt it to your project's specific needs:

customInput: You can provide your custom input component for date selection.
dateFormat: Define the format for displaying selected dates.
placeholderText: Specify the placeholder text when no date is selected.
highlightDates: Highlight specific dates on the calendar for easy reference.
inline: Display the RangePicker inline on your page.
Feel free to customize and enhance the RangePicker component according to your project requirements. Enjoy simplified date range selection with the Reusable RangePicker component!

License
This project is licensed under the XYZ License. See the LICENSE.md file for details.

Acknowledgments
We would like to acknowledge the developers of the react-datepicker library, which made this reusable RangePicker component possible.

## Customization


The DatePicker component offers various customization options, allowing you to adapt it to your project's specific needs:


- **customInput:** You can provide your custom input component for date selection.

- **dateFormat:** Define the format for displaying selected dates.

- **placeholderText:** Specify the placeholder text when no date is selected.

- **highlightDates:** Highlight specific dates on the calendar for easy reference.

- **shouldCloseOnSelect:** Control whether the calendar should close automatically upon date selection.


## Acknowledgments

We would like to acknowledge the developers of the react-datepicker library, which made this reusable DatePicker component possible.

Feel free to customize and enhance the DatePicker component according to your project requirements. Enjoy simplified date picking with the Reusable DatePicker component!
