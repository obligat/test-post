
function collect_same_elements(collection_a, object_b) {
	var arr=[];
	var elements=object_b.value;
	for (var i=0;i<9;i++)
	{
		for(var j=0;j<4;j++)
		{
			if (collection_a[i].key==elements[j])
			{
				arr.push(elements[j]);
			}
		}
	}
	return arr;
}

module.exports = collect_same_elements;
