select concat(d.director_first_name, d.director_last_name) as director_name, m.movie_title
from directors d
join movies_directors md 
on d.director_id = md.director_id
join movies m 
on m.movie_id = md.movie_id 
join movies_cast mc 
on mc.movie_id = m.movie_id
where mc.role = 'SeanMaguire';