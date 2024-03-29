export const FRAUD_COLUMNS = [
  {
    key: "fraudId",
    header: "ID",
    sorting: false,
    minWidth: "80px",
    maxWidth: "80px",
  },
  {
    key: "sourceTicketId",
    header: "Source Ticket Id",
    sorting: false,
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    key: "title",
    header: "Title",
    sorting: false,
    minWidth: "250px",
    maxWidth: "250px"
  },
  {
    key: "updatedBy",
    header: "Updated By",
    sorting: true,
    minWidth: "200px",
    maxWidth:"200px"
  },
  {
    key: "updatedOn",
    header: "Updated On",
    sorting: true,
    minWidth: "200px",
    maxWidth:"200px"
  },
  {
    key: "status",
    header: "Status",
    sorting: false,
    minWidth: "200px",
    maxWidth:"200px"
  },
  {
    key: "action",
    header: "Action",
    type: ["edit", "menu"],
    sorting: false,
    minWidth: "150px",
    maxWidth:"150px"
  },
];
export const INVENTORY_FRAUD_QUERY_KEY = {
  FRAUD_LISTING: "get-fraud-practices-list",
  FRAUD_SINGLE_VIEW: "get-single-fraud-practices",
};
