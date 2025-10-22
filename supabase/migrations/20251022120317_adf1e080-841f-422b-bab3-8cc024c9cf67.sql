-- Update destinations with authentic East African local images

-- Update Maasai Mara destinations
UPDATE destinations 
SET image_url = '/src/assets/destinations/maasai-mara-authentic.jpg'
WHERE title LIKE '%Maasai Mara%';

-- Update Serengeti
UPDATE destinations 
SET image_url = '/src/assets/destinations/serengeti-landscape.jpg'
WHERE title LIKE '%Serengeti%';

-- Update Mount Kenya
UPDATE destinations 
SET image_url = '/src/assets/destinations/mount-kenya-authentic.jpg'
WHERE title LIKE '%Mount Kenya%';

-- Update Nairobi
UPDATE destinations 
SET image_url = '/src/assets/destinations/nairobi-authentic.jpg'
WHERE title LIKE '%Nairobi%';

-- Update Zanzibar
UPDATE destinations 
SET image_url = '/src/assets/destinations/zanzibar-authentic.jpg'
WHERE title LIKE '%Zanzibar%';

-- Update Bwindi
UPDATE destinations 
SET image_url = '/src/assets/destinations/bwindi-authentic.jpg'
WHERE title LIKE '%Bwindi%';

-- Update Amboseli
UPDATE destinations 
SET image_url = '/src/assets/destinations/amboseli-elephants.jpg'
WHERE title LIKE '%Amboseli%';

-- Update Victoria Falls
UPDATE destinations 
SET image_url = '/src/assets/destinations/victoria-falls-view.jpg'
WHERE title LIKE '%Victoria Falls%';

-- Update Diani Beach
UPDATE destinations 
SET image_url = '/src/assets/destinations/diani-beach-coast.jpg'
WHERE title LIKE '%Diani%';

-- Update Samburu
UPDATE destinations 
SET image_url = '/src/assets/destinations/samburu-reserve.jpg'
WHERE title LIKE '%Samburu%';