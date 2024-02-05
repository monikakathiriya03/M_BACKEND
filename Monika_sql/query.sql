use monika;
show tables;

select sod.*,cm.CName,pm.Description from sales_orderdetails sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo = pm.ProductNo where CName = "Ivan Bayross"

select sod.ProductNo,pm.Description,sod.Qtyordered,sod.Qtydisp,so.OrderDate from sales_order so
inner join sales_orderdetails sod on so.OrderNo = sod.OrderNo
inner join product_master pm on sod.ProductNo = pm.ProductNo where month(so.DelyDate)=month(current_date())and year(so.DelyDate) = yearcurrent_date());


select distinct pm.ProductNo,pm.Description from sales_orderdetails sod 
inner join product_master pm on pm.ProductNo = sod.ProductNo;


select sod.*,cm.CName,pm.ProductNo,pm.Description from sales_orderdetails sod 
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo = pm.ProductNo where Description = "Trousers";

select so.OrderNo,cm.CName,pm.Description,sod.Qtyordered from sales_orderdetails sod
inner join sales_order so on sod.OrderNo = so.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo = pm.ProductNo where pm.Description = "Pull Overs" and sod.Qtyordered < 5;

select sod.*,cm.CName,pm.Description from sales_orderdetails sod 
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo = pm.ProductNo where cm.CName in ('Ivan Bayross','Mamta Muzumdar');

select sod.*,cm.ClientNo,cm.CName,pm.Description from sales_orderdetails sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.ProductNo = pm.ProductNo where cm.ClientNo in ('C00001','C00002');



