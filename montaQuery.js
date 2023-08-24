function select(table, fields =" * ", where = ";"){
    var query = "SELECT "
    if(typeof(fields) == 'object'){
        for (field of fields){
            query = query + field + (field === fields[fields.length-1] ? " FROM " : " , ")
        }

    }else{
        query = query + " * FROM ";
    }

    query = query + table;
    
    if(where != ";"){
        query = query + " WHERE " + where;
    }

    return query;
}

function insert(table, fields, values){
    var query = "INSERT INTO " + table + " (";
    for(field of fields){
        query = query + field +(field === fields[fields.length-1] ? ") VALUES (" : " ,")
    }

    for(value of values){
        query = query + " '" + value + "' " + (value === values[values.length-1] ? ");" : " ,")
    }
    
    return query;
}

function remove(table, where){
    var query = "DELETE FROM " + table + " WHERE " + where;
    return query;
}
function update(table, sets, where=";"){
    var query = "UPDATE " + table + " SET ";

    for(set of sets){
        query = query + set + (set === sets[sets.length-1] ? " " : " ,")
    }

    if(where != ";"){
        query = query + " WHERE " + where;
    }

    console.log(query);
    return query;
}

module.exports = {
    insert,
    select,
    update,
    remove
}