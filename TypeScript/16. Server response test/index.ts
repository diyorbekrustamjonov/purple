interface IPayment{
	sum: number,
	from: number,
	to: number
}

enum PaymentStatus {
	SUCCESS = "success",
	FAILED = "failed"
}

interface IPaymentRequest extends IPayment{

}

interface IDataSucces extends IPayment{
	databaseId: number,
}

interface IDatePaymentSuccess {
	sum: number,
	from: number,
	to: number 
}
interface IDatePaymentFaild {
	errorMessage: string,
	errorCode: string
}


interface IDatePesponseSuccess {
	status: PaymentStatus.SUCCESS,
	data: IDatePaymentSuccess
}

interface IDatePesponseFaild {
	status: PaymentStatus.FAILED,
	data: IDatePaymentFaild

}


function get(): IDatePesponseSuccess | IDatePesponseFaild {

}