export interface RangePickerProps {
  customRef?: any;
  startDate?: Date | null;
  endDate?: Date | null;
  onChange: (startDate: Date | null, endDate: Date | null) => void;
  selectsRange: boolean;
  isClearable?: boolean;
  monthsShown?: number;
  customInputsComponent?: React.ReactElement;
  highlightDates?: object | any;
  customInput?: any;
  placeholderText?: string;
  dateFormat?: string;
  inline?:boolean
}