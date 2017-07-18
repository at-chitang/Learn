validate

presence:		not null
unique:			khong trung
length:			{maximum:, minimum:}


vd:
validates :name, :email format: {with bieu_thuc_chinh_quy}, on: :create
validates :role, if: Proc.new{ :role != "admin" }

validates :image_size
def image_size
	if image.size > 5 megabytes
		self.errors.add(:image, :image_size)
	end
end
en.yml
	image_size: "Image is to small"
vi.yml
	image_size: "Anh qua nho"

