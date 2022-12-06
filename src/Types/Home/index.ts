export interface IPagination {
	has_next_page: boolean,
  has_previous_page: boolean,
  item_count: number,
  limit: number,
  page: number,
  page_count: number,
}
