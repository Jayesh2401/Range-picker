import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RangePickerProps } from './rangepicker.types';
import "./rangePicker.css";

const RangePicker: React.FC<RangePickerProps> = ({
  startDate,
  endDate,
  onChange,
  selectsRange,
  isClearable,
  monthsShown,
  customInput,
  highlightDates,
  customRef,
  customInputsComponent,
  dateFormat,
  placeholderText,
  inline=false,
}) => {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() + 7);

  const handleDateChange = (dates: [Date | null, Date | null] | null) => {
    if (dates) {
      const [start, end] = dates;
      onChange(start, end);
    }
  };

  return (
    <div className="date-range-picker">
      <DatePicker
        selected={startDate}
        ref={customRef}
        startDate={startDate}
        shouldCloseOnSelect={false}
        endDate={endDate}
        onChange={handleDateChange}
        focusSelectedMonth={true}
        selectsRange={selectsRange}
        monthsShown={monthsShown}
        customInput={customInput || customInputsComponent}
        highlightDates={highlightDates}
        dateFormat={dateFormat}
        placeholderText={placeholderText}
        isClearable={isClearable}
        inline={inline}
      >
        <div className="custom-buttonCalenders">
          <div>
            <button
              className="cancel-buttons"
              onClick={() => {
                if (customRef?.current) {
                  onChange(defaultStartDate, defaultEndDate);
                  customRef?.current.setOpen(false);
                }
              }}
            >
              Cancel
            </button>
            <button
              className="apply-buttons"
              onClick={() => {
                if (customRef?.current) {
                  customRef?.current.setOpen(false);
                }
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </DatePicker>
    </div>
  );
};

export default RangePicker;
